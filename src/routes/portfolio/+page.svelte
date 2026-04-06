<script lang="ts">
    import * as config from "$lib/config.js";
    import { formatDate } from "$lib/utils";
    import { Star, Calendar } from "lucide-svelte";

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

<div class="max-w-5xl mx-auto px-4 py-16 md:py-24">
    <header class="mb-16">
        <p class="text-xs uppercase tracking-widest text-base-content/30 mb-3">{data.portfolio.length} Projects</p>
        <h1 class="text-3xl md:text-4xl font-bold tracking-tight">Portfolio</h1>
        <p class="text-base-content/40 text-sm mt-4 max-w-lg">
            Products shipped for real companies — from enterprise platforms to startup MVPs.
        </p>
    </header>

    <div class="flex flex-col gap-4">
        {#each data.portfolio as project, i}
            <a
                href={`/portfolio/${project.slug}`}
                class="group block"
            >
                <div
                    class="rounded-lg border border-base-300 overflow-hidden
                           transition-all duration-200
                           hover:border-base-content/20"
                >
                    <div class="flex flex-col md:flex-row">
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

                        <div class="flex-1 p-6 md:p-8 flex flex-col justify-between">
                            <div>
                                <div class="flex items-center gap-3 mb-3 text-xs text-base-content/30">
                                    <span class="flex items-center gap-1">
                                        <Calendar size={12} />
                                        {formatDate(project.date)}
                                    </span>
                                    {#if project.rating}
                                        <span class="flex items-center gap-1" title="Impact rating">
                                            <Star size={12} />
                                            {project.rating}/5
                                        </span>
                                    {/if}
                                </div>

                                <h2 class="text-lg font-semibold mb-3
                                           group-hover:text-base-content/70 transition-colors duration-200">
                                    {project.title}
                                </h2>

                                <p class="text-base-content/40 text-sm mb-5 leading-relaxed line-clamp-2">
                                    {project.description}
                                </p>
                            </div>

                            <div class="flex flex-wrap gap-1.5">
                                {#each project.categories.slice(0, 6) as category}
                                    <span class="text-xs px-2 py-1 rounded-md bg-base-200 text-base-content/40">{category}</span>
                                {/each}
                                {#if project.categories.length > 6}
                                    <span class="text-xs px-2 py-1 rounded-md bg-base-200 text-base-content/30">
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
