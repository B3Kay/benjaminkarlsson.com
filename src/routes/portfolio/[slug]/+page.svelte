<script lang="ts">
    import { formatDate } from "$lib/utils.js";
    import { ArrowLeft, Star, Calendar } from "lucide-svelte";

    export let data;
</script>

<svelte:head>
    <title>{data.meta.title} - Benjamin Karlsson</title>
    <meta name="description" content={data.meta.description} />
    <meta property="og:type" content="article" />
    <meta property="og:title" content={data.meta.title} />
    <meta property="og:description" content={data.meta.description} />
    <meta property="og:image" content={data.meta.imageUrl} />
</svelte:head>

<article class="max-w-3xl mx-auto px-4 py-12 md:py-16">
    <!-- Back link -->
    <a
        href="/portfolio"
        class="inline-flex items-center gap-1.5 text-sm text-base-content/40 hover:text-base-content transition-colors mb-8"
    >
        <ArrowLeft size={14} />
        All projects
    </a>

    <!-- Header -->
    <header class="mb-10 animate-fade-in-up">
        <h1 class="text-3xl md:text-4xl font-black mb-4">
            <span class="brightness-150 contrast-150">{data.meta.title}</span>
        </h1>

        <p class="text-base-content/50 text-base md:text-lg mb-5 leading-relaxed">
            {data.meta.description}
        </p>

        <div class="flex flex-wrap items-center gap-4 text-sm text-base-content/40 mb-5">
            <span class="inline-flex items-center gap-1.5">
                <Calendar size={14} />
                {formatDate(data.meta.date)}
            </span>
            {#if data.meta.rating}
                <span class="inline-flex items-center gap-1.5">
                    <Star size={14} class="fill-current text-warning" />
                    {data.meta.rating}
                </span>
            {/if}
        </div>

        <div class="flex flex-wrap gap-1.5">
            {#each data.meta.categories as category}
                <span class="badge badge-sm badge-neutral">{category}</span>
            {/each}
        </div>
    </header>

    <!-- Hero image -->
    {#if data.meta.imageUrl && data.meta.imageUrl.trim() !== ""}
        <div class="rounded-xl overflow-hidden border border-base-300 mb-10 animate-fade-in-up" style="animation-delay: 0.1s">
            <img
                src={data.meta.imageUrl}
                alt={data.meta.title}
                class="w-full object-cover"
            />
        </div>
    {/if}

    <!-- Markdown content -->
    <div class="prose prose-lg max-w-none animate-fade-in-up" style="animation-delay: 0.15s">
        <svelte:component this={data.content} />
    </div>

    <!-- Bottom navigation -->
    <div class="mt-16 pt-8 border-t border-base-300">
        <a
            href="/portfolio"
            class="inline-flex items-center gap-1.5 text-sm text-base-content/40 hover:text-primary transition-colors"
        >
            <ArrowLeft size={14} />
            Back to all projects
        </a>
    </div>
</article>
