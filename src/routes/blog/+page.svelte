<script lang="ts">
    import { formatDate } from "$lib/utils";
    import * as config from "$lib/config.js";

    export let data;
</script>

<svelte:head>
    <title>Blog - {config.title}</title>
    <meta name="description" content="Articles about productivity, business, health & fitness, and software development by Benjamin Karlsson." />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Blog - {config.title}" />
    <meta property="og:description" content="Articles about productivity, business, health & fitness, and software development by Benjamin Karlsson." />
</svelte:head>

<div class="max-w-3xl mx-auto px-4 py-16 md:py-24">
    <header class="mb-16">
        <p class="text-xs uppercase tracking-widest text-base-content/30 mb-3">{data.posts.length} Posts</p>
        <h1 class="text-3xl md:text-4xl font-bold tracking-tight">Blog</h1>
        <p class="mt-4 text-base-content/40 text-sm max-w-lg">
            Writing about productivity, tech, health, and things I find interesting.
        </p>
    </header>

    <div class="flex flex-col">
        {#each data.posts as post}
            <a
                href={post.slug}
                class="group block py-6 border-b border-base-300 hover:bg-base-200/50 -mx-4 px-4 transition-colors duration-200"
            >
                <div class="flex flex-wrap items-center gap-3 mb-2">
                    <time class="text-xs text-base-content/30">{formatDate(post.date)}</time>
                    {#each post.categories as category}
                        <span class="text-xs px-2 py-0.5 rounded-md bg-base-200 text-base-content/30">{category}</span>
                    {/each}
                </div>
                <h2 class="text-base font-semibold group-hover:text-base-content/70 transition-colors duration-200 capitalize">
                    {post.title}
                </h2>
                <p class="mt-2 text-sm text-base-content/40 leading-relaxed line-clamp-2">
                    {post.description}
                </p>
            </a>
        {/each}
    </div>
</div>
