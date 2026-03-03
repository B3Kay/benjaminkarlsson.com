<script lang="ts">
    import { onMount, onDestroy, tick } from "svelte";
    import { Send, Sparkles } from "lucide-svelte";

    const MAX_MESSAGES = 10;
    const MAX_INPUT_LENGTH = 500;

    type Message = {
        role: "user" | "assistant";
        content: string;
        animation?: "bounce" | "blip";
        local?: boolean; // true = don't send to API (intro, nudges, reactions)
    };

    let messages: Message[] = [];
    let input = "";
    let loading = false;
    let limitReached = false;
    let showTyping = false;
    let chatContainer: HTMLDivElement;
    let windowEl: HTMLDivElement;
    let chatWrapper: HTMLDivElement;
    let wiggling = false;
    let inputDisabledUntilReady = true;
    let idleTimer: ReturnType<typeof setTimeout> | null = null;
    let idleNudgeIndex = 0;
    let showConfetti = false;
    let sparkles: Array<{ id: number; x: number; y: number; color: string }> = [];
    let sparkleId = 0;
    let introFinishedAt = 0; // timestamp when intro sequence completes
    let isFirstUserMessage = true;

    const FAST_REPLIES = [
        "Whoa, that was quick! Most people just stare at me 😄",
        "Speedy! I like you already ⚡",
        "Oh wow, someone's eager! Love it 🔥",
    ];

    const SLOW_REPLIES = [
        "Oh, you took your time! Thought you'd left me hanging 😅",
        "Finally! I was starting to talk to myself over here 😂",
        "There you are! Was about to file a missing person report 🕵️",
    ];

    const IDLE_NUDGES = [
        "Psst... don't be shy! I know things about Benji 😄",
        "Fun fact: Benji once built a 2-meter tall bicycle and rode it through Gothenburg. Wanna hear more? 🚲",
        "*beep boop* 🤖 Still here! Ask me anything — favorite tech stack, travel stories, you name it!",
    ];

    const INTRO_MESSAGES = [
        "Hey there! 👋",
        "I'm Benji's AI sidekick. Ask me anything about him — skills, projects, weird bicycle stories... you name it! 🚀",
    ];

    // Contact-related keywords that trigger celebration
    const CONTACT_KEYWORDS = [
        "email",
        "contact",
        "reach",
        "hire",
        "linkedin",
        "get in touch",
        "phone",
        "available",
    ];

    $: userMessageCount = messages.filter((m) => m.role === "user").length;

    function scrollToBottom() {
        if (chatContainer) {
            requestAnimationFrame(() => {
                chatContainer.scrollTo({
                    top: chatContainer.scrollHeight,
                    behavior: "smooth",
                });
            });
        }
    }

    function resetIdleTimer() {
        if (idleTimer) clearTimeout(idleTimer);
        if (idleNudgeIndex >= IDLE_NUDGES.length || limitReached) return;

        idleTimer = setTimeout(async () => {
            if (loading || limitReached) return;
            await showTypingThenMessage(
                IDLE_NUDGES[idleNudgeIndex],
                "blip",
                1200
            );
            idleNudgeIndex++;
            resetIdleTimer();
        }, idleNudgeIndex === 0 ? 10000 : 14000);
    }

    async function showTypingThenMessage(
        content: string,
        animation: "bounce" | "blip" = "bounce",
        typingDuration = 1500,
        local = true
    ) {
        showTyping = true;
        scrollToBottom();
        await delay(typingDuration);
        showTyping = false;
        messages = [
            ...messages,
            { role: "assistant", content, animation, local },
        ];
        await tick();
        scrollToBottom();
    }

    function delay(ms: number): Promise<void> {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    function triggerWiggle() {
        wiggling = true;
        setTimeout(() => (wiggling = false), 600);
    }

    function spawnSparkles(count = 6) {
        if (!chatWrapper) return;
        const rect = chatWrapper.getBoundingClientRect();
        const colors = ["#FFD700", "#FF6B9D", "#00D4FF", "#A855F7", "#34D399"];
        const newSparkles = Array.from({ length: count }, () => ({
            id: sparkleId++,
            x: Math.random() * rect.width,
            y: Math.random() * 40 + rect.height - 80,
            color: colors[Math.floor(Math.random() * colors.length)],
        }));
        sparkles = [...sparkles, ...newSparkles];
        setTimeout(() => {
            sparkles = sparkles.filter(
                (s) => !newSparkles.find((ns) => ns.id === s.id)
            );
        }, 1400);
    }

    function triggerConfetti() {
        showConfetti = true;
        spawnSparkles(4);
        setTimeout(() => (showConfetti = false), 2500);
    }

    function containsContactKeyword(text: string): boolean {
        const lower = text.toLowerCase();
        return CONTACT_KEYWORDS.some((kw) => lower.includes(kw));
    }

    // --- Intro sequence ---
    onMount(async () => {
        // Brief pause, then typing indicator
        await delay(600);
        showTyping = true;
        scrollToBottom();

        // First message fades in
        await delay(1200);
        showTyping = false;
        messages = [
            { role: "assistant", content: INTRO_MESSAGES[0], animation: "blip", local: true },
        ];
        await tick();
        scrollToBottom();

        // Short pause, then typing again
        await delay(800);
        showTyping = true;
        scrollToBottom();

        // Second message fades in
        await delay(1400);
        showTyping = false;
        messages = [
            ...messages,
            {
                role: "assistant",
                content: INTRO_MESSAGES[1],
                animation: "bounce",
                local: true,
            },
        ];
        await tick();
        scrollToBottom();

        // Enable input and start idle timer
        inputDisabledUntilReady = false;
        introFinishedAt = Date.now();
        resetIdleTimer();
    });

    onDestroy(() => {
        if (idleTimer) clearTimeout(idleTimer);
    });

    // --- Send message ---
    async function sendMessage() {
        const trimmed = input.trim();
        if (!trimmed || loading || limitReached || inputDisabledUntilReady)
            return;

        // Reset idle nudges on user interaction
        idleNudgeIndex = IDLE_NUDGES.length; // stop nudges once user engages
        if (idleTimer) clearTimeout(idleTimer);

        if (userMessageCount >= MAX_MESSAGES) {
            limitReached = true;
            triggerConfetti();
            await showTypingThenMessage(
                "That's a wrap for this session! 🎉 For a deeper chat, reach out to Benjamin at hi@benjaminkarlsson.com or connect on LinkedIn. He'd love to hear from you! 😊",
                "bounce",
                1000
            );
            submitToWall(); // fire-and-forget: submit conversation for Hall of Fame
            return;
        }

        const userMessage: Message = {
            role: "user",
            content: trimmed.slice(0, MAX_INPUT_LENGTH),
            animation: "bounce",
        };
        messages = [...messages, userMessage];
        input = "";
        await tick();
        scrollToBottom();

        // First message witty reaction based on response time
        if (isFirstUserMessage) {
            isFirstUserMessage = false;
            const elapsed = Date.now() - introFinishedAt;
            const isFast = elapsed < 8000; // replied within 8 seconds
            const pool = isFast ? FAST_REPLIES : SLOW_REPLIES;
            const wittyLine = pool[Math.floor(Math.random() * pool.length)];

            await showTypingThenMessage(wittyLine, "blip", 800);

            await delay(300);
        }

        loading = true;
        await tick();
        scrollToBottom();

        try {
            // Only send actual conversation messages to the API (skip local-only ones)
            const apiMessages = messages
                .filter((m) => !m.local)
                .map((m) => ({ role: m.role, content: m.content }));

            const res = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ messages: apiMessages }),
            });

            const data = await res.json();
            loading = false;

            const reply = data.error || data.reply;
            const isCelebration = containsContactKeyword(reply);

            await showTypingThenMessage(reply, "bounce", 800, false);

            if (isCelebration) {
                triggerConfetti();
                submitToWall();
            }
        } catch {
            loading = false;
            await showTypingThenMessage(
                "Oops, something went wrong! Try again or reach Benjamin at hi@benjaminkarlsson.com 🙈",
                "blip",
                500
            );
        }
    }

    async function submitToWall() {
        // Send the actual conversation (non-local messages) for highlight curation
        const apiMessages = messages
            .filter((m) => !m.local)
            .map((m) => ({ role: m.role, content: m.content }));

        if (apiMessages.length < 2) return; // need at least one exchange

        try {
            await fetch("/api/wall", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ messages: apiMessages }),
            });
        } catch {
            // Fire-and-forget, don't block the UX
        }
    }

    function handleKeydown(e: KeyboardEvent) {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    }
</script>

<div
    bind:this={chatWrapper}
    class="relative"
>
    <!-- Sparkle particles -->
    {#each sparkles as sparkle (sparkle.id)}
        <div
            class="sparkle"
            style="left: {sparkle.x}px; bottom: 60px;"
        >
            <div class="sparkle-inner">
                <Sparkles size={14} color={sparkle.color} />
            </div>
        </div>
    {/each}

    <!-- Confetti -->
    {#if showConfetti}
        {#each Array(10) as _, i}
            <div
                class="confetti-piece"
                style="
                    left: {Math.random() * 100}%;
                    background: hsl({Math.random() * 360}, 80%, 60%);
                    border-radius: {Math.random() > 0.5 ? '50%' : '2px'};
                    width: {6 + Math.random() * 6}px;
                    height: {6 + Math.random() * 6}px;
                    --fall-duration: {1.5 + Math.random() * 1.5}s;
                    --fall-delay: {Math.random() * 0.4}s;
                "
            />
        {/each}
    {/if}

    <div
        bind:this={windowEl}
        class="mockup-window border border-base-300 backdrop-blur transition-transform"
        class:chat-wiggle={wiggling}
    >
        <div
            class="flex flex-col border-t border-base-300"
            style="min-height: 160px; max-height: 480px;"
        >
            <!-- Messages area -->
            <div
                bind:this={chatContainer}
                class="overflow-y-auto px-4 py-4"
            >
                {#each messages as message, i (i)}
                    {#if message.role === "assistant"}
                        <div
                            class="chat pt-2 chat-start {message.animation === 'blip' ? 'chat-blip' : 'chat-bounce-in'}"
                        >
                            <div class="chat-image avatar">
                                <div class="w-10 rounded-full">
                                    <img
                                        alt="Benji's AI"
                                        src="/asset/cv-no-smile-fancy-500.jpg"
                                    />
                                </div>
                            </div>
                            <div class="chat-bubble">{message.content}</div>
                        </div>
                    {:else}
                        <div class="chat pt-2 chat-end chat-bounce-in">
                            <div class="chat-bubble chat-bubble-primary">
                                {message.content}
                            </div>
                        </div>
                    {/if}
                {/each}

                {#if showTyping || loading}
                    <div class="chat pt-2 chat-start chat-bounce-in">
                        <div
                            class="chat-image avatar"
                            class:avatar-thinking={loading}
                        >
                            <div class="w-10 rounded-full">
                                <img
                                    alt="Benji's AI"
                                    src="/asset/cv-no-smile-fancy-500.jpg"
                                />
                            </div>
                        </div>
                        <div class="chat-bubble">
                            <span class="flex gap-1 items-center py-1 px-1">
                                <span class="typing-dot"></span>
                                <span class="typing-dot"></span>
                                <span class="typing-dot"></span>
                            </span>
                        </div>
                    </div>
                {/if}
            </div>

            <!-- Input area -->
            <div class="border-t border-base-300 p-3">
                {#if limitReached}
                    <div
                        class="text-center text-sm text-base-content/60 py-2 chat-bounce-in"
                    >
                        Session complete! —
                        <a
                            href="mailto:hi@benjaminkarlsson.com"
                            class="link link-primary font-semibold"
                            >email Benjamin</a
                        > to continue the conversation! 🎉
                    </div>
                {:else}
                    <form
                        on:submit|preventDefault={sendMessage}
                        class="flex gap-2 items-center"
                    >
                        <input
                            type="text"
                            bind:value={input}
                            on:keydown={handleKeydown}
                            maxlength={MAX_INPUT_LENGTH}
                            placeholder={inputDisabledUntilReady
                                ? "Benji's AI is waking up..."
                                : "Ask about Benji's skills, travels, projects..."}
                            class="input input-bordered flex-1 input-sm md:input-md"
                            disabled={loading || inputDisabledUntilReady}
                        />
                        <button
                            type="submit"
                            class="btn btn-primary btn-sm md:btn-md btn-square"
                            disabled={loading ||
                                inputDisabledUntilReady ||
                                !input.trim()}
                        >
                            <Send size={18} />
                        </button>
                    </form>
                    <p
                        class="text-xs text-base-content/40 mt-1 text-right"
                    >
                        {userMessageCount}/{MAX_MESSAGES} messages
                    </p>
                {/if}
            </div>
        </div>
    </div>
</div>
