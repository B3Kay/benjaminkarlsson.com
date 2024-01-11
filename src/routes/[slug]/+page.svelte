<script lang="ts">
    import { formatDate } from "$lib/utils.js";

    export let data;
</script>

<svelte:head>
    <title>{data.meta.title}</title>
    <meta property="og:type" content="article" />
    <meta property="og:title" content="data.meta.title" />
</svelte:head>

<article class="ms-auto me-auto container mx-auto">
    <hgroup>
        <h1 class="text-7xl capitalize">{data.meta.title}</h1>
        <p class="text-slate-500 mt-2">
            Publihed at {formatDate(data.meta.date)}
        </p>
    </hgroup>

    <div class="flex gap-2 mt-8">
        {#each data.meta.categories as category}
            <span class="badge badge-ghost">&num;{category}</span>
        {/each}
    </div>

    <div class="prose max-w-2xl">
        <svelte:component this={data.content} />
    </div>
</article>
