<script lang="ts">
    import { onMount } from "svelte";
    import { MessageCircle } from "lucide-svelte";

    type WallHighlight = {
        id: string;
        snippet: string;
        emoji: string;
        timestamp: number;
    };

    let highlights: WallHighlight[] = [];
    let loaded = false;

    // Fallback seed highlights for when the wall is empty/new
    const SEED_HIGHLIGHTS: WallHighlight[] = [
        {
            id: "seed-1",
            snippet: "Can your bicycle reach the clouds?",
            emoji: "🚲",
            timestamp: Date.now() - 86400000 * 3,
        },
        {
            id: "seed-2",
            snippet: "I asked for a job. The AI asked for my resume.",
            emoji: "😂",
            timestamp: Date.now() - 86400000 * 2,
        },
        {
            id: "seed-3",
            snippet: "Is Benji a robot? Asking for a friend.",
            emoji: "🤖",
            timestamp: Date.now() - 86400000,
        },
        {
            id: "seed-4",
            snippet: "The AI knows more about Benji than Benji does",
            emoji: "🧠",
            timestamp: Date.now() - 43200000,
        },
        {
            id: "seed-5",
            snippet: "Tried to jailbreak the bot. It roasted me instead.",
            emoji: "🔥",
            timestamp: Date.now() - 3600000,
        },
    ];

    function timeAgo(timestamp: number): string {
        const seconds = Math.floor((Date.now() - timestamp) / 1000);
        if (seconds < 60) return "just now";
        const minutes = Math.floor(seconds / 60);
        if (minutes < 60) return `${minutes}m ago`;
        const hours = Math.floor(minutes / 60);
        if (hours < 24) return `${hours}h ago`;
        const days = Math.floor(hours / 24);
        return `${days}d ago`;
    }

    onMount(async () => {
        try {
            const res = await fetch("/api/wall");
            const data = await res.json();
            if (data.highlights && data.highlights.length > 0) {
                highlights = data.highlights;
            } else {
                highlights = SEED_HIGHLIGHTS;
            }
        } catch {
            highlights = SEED_HIGHLIGHTS;
        }
        loaded = true;
    });
</script>

{#if loaded && highlights.length > 0}
    <div class="wall-outer mt-16 mb-8">
        <div class="flex items-center justify-center gap-2 mb-6">
            <MessageCircle size={20} class="text-primary" />
            <h2 class="text-lg font-bold brightness-150 contrast-150">
                Chat Hall of Fame
            </h2>
            <MessageCircle size={20} class="text-primary" />
        </div>

        <p class="text-center text-sm text-base-content/50 mb-6">
            Memorable moments from visitors chatting with Benji's AI
        </p>

        <!-- Scrolling marquee -->
        <div class="wall-marquee-container relative">
            <!-- Fade edges -->
            <div
                class="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
                style="background: linear-gradient(to right, oklch(var(--b1)), transparent);"
            />
            <div
                class="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
                style="background: linear-gradient(to left, oklch(var(--b1)), transparent);"
            />

            <div class="wall-marquee-track flex gap-4 py-2">
                <!-- Double the items for seamless loop -->
                {#each [...highlights, ...highlights] as highlight (highlight.id + Math.random())}
                    <div
                        class="wall-card flex-shrink-0 bg-base-200 rounded-xl px-4 py-3 border border-base-300
                               hover:border-primary/40 hover:scale-105 transition-all duration-300 cursor-default
                               max-w-[280px] min-w-[220px]"
                    >
                        <div class="flex items-start gap-2">
                            <span class="text-xl flex-shrink-0"
                                >{highlight.emoji}</span
                            >
                            <p class="text-sm leading-snug">
                                {highlight.snippet}
                            </p>
                        </div>
                        <p
                            class="text-xs text-base-content/30 mt-2 text-right"
                        >
                            {timeAgo(highlight.timestamp)}
                        </p>
                    </div>
                {/each}
            </div>
        </div>
    </div>
{/if}

<style>
    .wall-outer {
        max-width: 100vw;
        overflow: hidden;
    }

    .wall-marquee-container {
        overflow: hidden;
        mask-image: linear-gradient(
            to right,
            transparent,
            black 10%,
            black 90%,
            transparent
        );
        -webkit-mask-image: linear-gradient(
            to right,
            transparent,
            black 10%,
            black 90%,
            transparent
        );
    }

    .wall-marquee-track {
        animation: marquee-scroll 40s linear infinite;
        width: max-content;
    }

    .wall-marquee-track:hover {
        animation-play-state: paused;
    }

    @keyframes marquee-scroll {
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(-50%);
        }
    }
</style>
