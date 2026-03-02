<script lang="ts">
    import { Send } from "lucide-svelte";

    const MAX_MESSAGES = 10; // max user messages before cut-off
    const MAX_INPUT_LENGTH = 500;

    type Message = {
        role: "user" | "assistant";
        content: string;
    };

    let messages: Message[] = [
        {
            role: "assistant",
            content:
                "Hey! 👋 I'm Benjamin's AI assistant. Ask me anything about his skills, experience, or how to get in touch!",
        },
    ];

    let input = "";
    let loading = false;
    let limitReached = false;
    let chatContainer: HTMLDivElement;

    $: userMessageCount = messages.filter((m) => m.role === "user").length;

    function scrollToBottom() {
        if (chatContainer) {
            // Use requestAnimationFrame to wait for DOM update
            requestAnimationFrame(() => {
                chatContainer.scrollTop = chatContainer.scrollHeight;
            });
        }
    }

    async function sendMessage() {
        const trimmed = input.trim();
        if (!trimmed || loading || limitReached) return;

        if (userMessageCount >= MAX_MESSAGES) {
            limitReached = true;
            messages = [
                ...messages,
                {
                    role: "assistant",
                    content:
                        "We've reached the message limit for this session! For a deeper conversation, reach out to Benjamin directly at hi@benjaminkarlsson.com or connect on LinkedIn. 😊",
                },
            ];
            scrollToBottom();
            return;
        }

        const userMessage: Message = { role: "user", content: trimmed.slice(0, MAX_INPUT_LENGTH) };
        messages = [...messages, userMessage];
        input = "";
        loading = true;
        scrollToBottom();

        try {
            // Send only user/assistant messages (not the initial greeting which is client-only)
            const apiMessages = messages
                .slice(1) // skip the initial assistant greeting
                .map((m) => ({ role: m.role, content: m.content }));

            const res = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ messages: apiMessages }),
            });

            const data = await res.json();

            if (data.error) {
                messages = [
                    ...messages,
                    {
                        role: "assistant",
                        content: data.error,
                    },
                ];
            } else {
                messages = [
                    ...messages,
                    { role: "assistant", content: data.reply },
                ];
            }
        } catch {
            messages = [
                ...messages,
                {
                    role: "assistant",
                    content:
                        "Oops, something went wrong. Try again or reach Benjamin at hi@benjaminkarlsson.com!",
                },
            ];
        } finally {
            loading = false;
            scrollToBottom();
        }
    }

    function handleKeydown(e: KeyboardEvent) {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    }
</script>

<div class="mockup-window border border-base-300 backdrop-blur">
    <div class="flex flex-col border-t border-base-300" style="height: 420px;">
        <!-- Messages area -->
        <div
            bind:this={chatContainer}
            class="flex-1 overflow-y-auto px-4 py-4"
        >
            {#each messages as message}
                {#if message.role === "assistant"}
                    <div class="chat pt-2 chat-start">
                        <div class="chat-image avatar">
                            <div class="w-10 rounded-full">
                                <img
                                    alt="AI Assistant"
                                    src="/asset/cv-no-smile-fancy-500.jpg"
                                />
                            </div>
                        </div>
                        <div class="chat-bubble">{message.content}</div>
                    </div>
                {:else}
                    <div class="chat pt-2 chat-end">
                        <div class="chat-bubble chat-bubble-primary">
                            {message.content}
                        </div>
                    </div>
                {/if}
            {/each}

            {#if loading}
                <div class="chat pt-2 chat-start">
                    <div class="chat-image avatar">
                        <div class="w-10 rounded-full">
                            <img
                                alt="AI Assistant"
                                src="/asset/cv-no-smile-fancy-500.jpg"
                            />
                        </div>
                    </div>
                    <div class="chat-bubble">
                        <span class="loading loading-dots loading-sm"></span>
                    </div>
                </div>
            {/if}
        </div>

        <!-- Input area -->
        <div class="border-t border-base-300 p-3">
            {#if limitReached}
                <div class="text-center text-sm text-base-content/60 py-2">
                    Session limit reached —
                    <a
                        href="mailto:hi@benjaminkarlsson.com"
                        class="link link-primary">email Benjamin</a
                    > for more!
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
                        placeholder="Ask about Benjamin's skills, experience..."
                        class="input input-bordered flex-1 input-sm md:input-md"
                        disabled={loading}
                    />
                    <button
                        type="submit"
                        class="btn btn-primary btn-sm md:btn-md btn-square"
                        disabled={loading || !input.trim()}
                    >
                        <Send size={18} />
                    </button>
                </form>
                <p class="text-xs text-base-content/40 mt-1 text-right">
                    {userMessageCount}/{MAX_MESSAGES} messages
                </p>
            {/if}
        </div>
    </div>
</div>
