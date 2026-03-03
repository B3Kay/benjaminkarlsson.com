<script lang="ts">
    import * as config from "$lib/config.js";
    import { Star } from "lucide-svelte";

    // biome-ignore lint/suspicious/noImplicitAnyLet: <explanation>
    export let data;
</script>

<svelte:head>
    <title>Portfolio - {config.title}</title>
    <meta name="description" content="Portfolio of projects by Benjamin Karlsson. Full stack web applications built with React, TypeScript, Svelte, and more." />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Portfolio - {config.title}" />
    <meta property="og:description" content="Portfolio of projects by Benjamin Karlsson. Full stack web applications built with React, TypeScript, Svelte, and more." />
</svelte:head>

<div class="max-w-5xl mx-auto px-4 py-12 md:py-16">
    <!-- Header -->
    <header class="mb-12 md:mb-16 animate-fade-in-up">
        <div class="badge badge-accent badge-outline mb-4">
            {data.portfolio.length} Projects
        </div>
        <h1 class="text-4xl md:text-5xl font-black mb-4">
            <span class="brightness-150 contrast-150">My Projects</span>
        </h1>
        <p class="text-base-content/60 text-lg max-w-xl">
            Real work from real companies. Each one taught me something different about building software people actually use.
        </p>
    </header>

    <!-- Project cards -->
    <div class="flex flex-col gap-6 md:gap-8">
        {#each data.portfolio as project, i}
            <a
                href={`/portfolio/${project.slug}`}
                class="group block animate-fade-in-up"
                style="animation-delay: {0.05 * (i + 1)}s"
            >
                <div
                    class="rounded-xl border border-base-300 overflow-hidden
                           transition-all duration-300
                           hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
                >
                    <div class="flex flex-col md:flex-row">
                        <!-- Image -->
                        {#if project.imageUrl && project.imageUrl.trim() !== ""}
                            <div class="md:w-2/5 overflow-hidden bg-base-200">
                                <img
                                    src={project.imageUrl}
                                    alt={project.title}
                                    class="w-full h-48 md:h-full object-cover
                                           transition-transform duration-500
                                           group-hover:scale-105"
                                />
                            </div>
                        {/if}

                        <!-- Content -->
                        <div class="flex-1 p-6 md:p-8 flex flex-col justify-between">
                            <div>
                                <div class="flex items-start justify-between gap-4 mb-3">
                                    <h2 class="text-xl md:text-2xl font-bold brightness-150 contrast-150
                                               group-hover:text-primary transition-colors duration-300">
                                        {project.title}
                                    </h2>
                                    {#if project.rating}
                                        <div class="flex items-center gap-1 text-sm text-base-content/40 flex-shrink-0">
                                            <Star size={14} class="fill-current text-warning" />
                                            <span>{project.rating}</span>
                                        </div>
                                    {/if}
                                </div>

                                <p class="text-base-content/50 text-sm md:text-base mb-5 leading-relaxed">
                                    {project.description}
                                </p>
                            </div>

                            <div class="flex flex-wrap gap-1.5">
                                {#each project.categories.slice(0, 6) as category}
                                    <span class="badge badge-sm badge-neutral">{category}</span>
                                {/each}
                                {#if project.categories.length > 6}
                                    <span class="badge badge-sm badge-ghost">
                                        +{project.categories.length - 6}
                                    </span>
                                {/if}
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        {/each}
    </div>
</div>
