<script lang="ts">
    import { formatDate } from "$lib/utils";
    import * as config from "$lib/config.js";

    export let data;
</script>

<svelte:head>
    <title>{config.title}</title>
</svelte:head>

<section class="ms-auto me-auto container">
    <h1>All posts</h1>
    <ul class="grid gap-7">
        {#each data.posts as post}
            <li
                class="max-is-prose
                last:border-b-0
                border-b-2
                border-slate-600
                pb-7
                "
            >
                <a class="text-2xl text-white capitalize" href={post.slug}
                    >{post.title}{post.slug}</a
                >
                <p class="mt-2 text-slate-400">{formatDate(post.date)}</p>
                <p class="mt-2 line-clamp-3">{post.description}</p>
            </li>
        {/each}
    </ul>
</section>
