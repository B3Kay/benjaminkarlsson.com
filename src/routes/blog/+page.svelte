<script lang="ts">
    import { formatDate } from "$lib/utils";
    import * as config from "$lib/config.js";

    export let data;
</script>

<svelte:head>
    <title>{config.title}</title>
</svelte:head>

<section class="ms-auto me-auto container max-w-2xl">
    <h1 class="text-7xl md:text-6xl font-black">
        <span class="brightness-150 contrast-150"> All Posts </span>
        <img
            class="w-16 inline"
            src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Face%20with%20Monocle.png"
            alt="Star-Struck"
        />
    </h1>
    <p class="prose mb-24">
        I like to blog about stuff like productivity, business, health &
        fitness, and other stuff I'm interested in. Hopefully you'll find some
        of it interesting too.
    </p>
    <ul class="grid gap-7">
        {#each data.posts as post}
            <li
                class="max-is-prose
                last:border-b-0
                border-b-2
                border-slate-700
                pb-7
                "
            >
                <a
                    class="text-2xl font-bold text-base-contents capitalize hover:text-primary"
                    href={post.slug}>{post.title}</a
                >
                <p class="mt-2 text-slate-400">{formatDate(post.date)}</p>
                <p class="mt-2 line-clamp-3">{post.description}</p>
                <div class="flex gap-2 mt-2 mb-2">
                    {#each post.categories as category}
                        <span class="badge badge-ghost">{category}</span>
                    {/each}
                </div>
            </li>
        {/each}
    </ul>
</section>
