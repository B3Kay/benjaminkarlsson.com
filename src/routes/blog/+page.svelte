<script lang="ts">
    import { formatDate } from "$lib/utils";
    import * as config from "$lib/config.js";

    export let data;
</script>

<svelte:head>
    <title>{config.title}</title>
</svelte:head>

<section class="ms-auto me-auto container max-w-2xl">
    <h1 class="text-3xl font-bold tracking-tight sm:text-4xl">
        <span class="brightness-150 contrast-150"> All Posts </span>
        <img
            class="w-12 inline"
            src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Face%20with%20Monocle.png"
            alt="Star-Struck"
        />
    </h1>
    <p class="mt-2 prose">
        I like to blog about stuff like productivity, business, health &
        fitness, and other stuff I'm interested in. Hopefully you'll find some
        of it interesting too.
    </p>
    <ul
        class="grid gap-16 border-t-1
    border-base-300
    pt-16 mt-16"
    >
        {#each data.posts as post}
            <li
                class="max-is-prose
                last:mb-16
                "
            >
                <div class="flex items-center gap-x-4 mt-2 mb-2">
                    <time class="text-slate-400">{formatDate(post.date)}</time>
                    <span class="flex gap-2 py-1.5">
                        {#each post.categories as category}
                            <span class="badge badge-ghost">{category}</span>
                        {/each}
                    </span>
                </div>
                <a
                    class="mt-3 text-lg font-semibold leading-6 text-base-contents capitalize hover:text-primary"
                    href={post.slug}>{post.title}</a
                >
                <p class="mt-5 line-clamp-3 text-sm leading-6">
                    {post.description}
                </p>
            </li>
        {/each}
    </ul>
</section>
