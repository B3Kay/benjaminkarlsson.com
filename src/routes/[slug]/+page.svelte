<script lang="ts">
    import { formatDate } from "$lib/utils.js";

    export let data;
</script>

<svelte:head>
    <title>{data.meta.title}</title>
    <meta property="og:type" content="article" />
    <meta property="og:title" content="data.meta.title" />
</svelte:head>

<article class="ms-auto me-auto prose max-w-2xl">
    <hgroup>
        <!-- <h1 class="text-4xl capitalize">{data.meta.title}</h1>
        <p>{data.meta.description}</p> -->
        <p class="text-slate-500 mt-2">
            Published on {formatDate(data.meta.date)}
        </p>
    </hgroup>

    <div class="flex flex-wrap gap-2 mt-2 mb-8">
        {#each data.meta.categories as category}
            <span class="badge badge-ghost">{category}</span>
        {/each}
    </div>
    <!-- <div class="divider"></div> -->

    <div class="">
        <svelte:component this={data.content} />
    </div>
</article>
