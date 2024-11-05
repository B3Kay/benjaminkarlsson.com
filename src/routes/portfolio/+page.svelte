<script lang="ts">
    import { formatDate } from "$lib/utils";
    import * as config from "$lib/config.js";

    export let data;
</script>

<svelte:head>
    <title>{config.title}</title>
</svelte:head>

<div class="container mx-auto px-4 py-8 md:py-10">
    <header class="text-center mb-8 md:mb-10">
        <h1 class="text-3xl md:text-4xl font-bold mb-3 md:mb-4">My Projects</h1>
        <p class="text-lg md:text-xl text-muted-foreground">
            Explore some of the projects I've worked on.
        </p>
    </header>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6">
        {#each data.portfolio as project}
            <div
                class="bg-white/10 rounded-lg overflow-hidden border border-gray-700 shadow-none transition-all duration-300 hover:shadow-xl"
            >
                <a href={`/portfolio/${project.slug}`} class="block group">
                    <div class="relative h-56 md:h-72">
                        <img
                            src={project.imageUrl}
                            alt={project.title}
                            class="transition-transform duration-300 group-hover:scale-105 object-cover w-full h-full"
                        />
                    </div>
                    <div class="p-6 md:p-8">
                        <h3
                            class="text-xl md:text-2xl font-semibold mb-2 md:mb-3"
                        >
                            {project.title}
                        </h3>
                        <p
                            class="text-muted-foreground text-xs md:text-sm mb-4 md:mb-5"
                        >
                            {project.description}
                        </p>
                        <span class="flex flex-wrap gap-1 md:gap-2 py-1">
                            {#each project.categories as category}
                                <span class="badge badge-neutral"
                                    >{category}</span
                                >
                            {/each}
                        </span>
                    </div>
                </a>
            </div>
        {/each}
    </div>
</div>
