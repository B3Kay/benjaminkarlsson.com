<script lang="ts">
    import { formatDate } from "$lib/utils";
    import * as config from "$lib/config.js";

    export let data;
</script>

<svelte:head>
    <title>{config.title}</title>
</svelte:head>

<div class="container mx-auto px-4 py-12">
    <header class="text-center mb-12">
        <h1 class="text-4xl font-bold mb-4">My Projects</h1>
        <p class="text-xl text-muted-foreground">
            Explore some of the projects I've worked on.
        </p>
    </header>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        {#each data.portfolio as project, index}
            {#if index === 0}
                <!-- Large Card -->
                <div class="col-span-1 md:col-span-2 row-span-2">
                    <a
                        href={`/portfolio/${project.slug}`}
                        class="block group h-full"
                    >
                        <div
                            class="bg-card rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl h-full"
                        >
                            <div class="relative h-48 md:h-64">
                                <img
                                    src={project.imageUrl}
                                    alt={project.title}
                                    class="transition-transform duration-300 group-hover:scale-105 object-cover w-full h-full"
                                />
                            </div>
                            <div class="p-4">
                                <h3 class="text-lg font-semibold mb-2">
                                    {project.title}
                                </h3>
                                <p class="text-muted-foreground">
                                    {project.description}
                                </p>
                            </div>
                        </div>
                    </a>
                </div>
            {:else if index === 4}
                <!-- Wide Card -->
                <div class="col-span-1 md:col-span-2">
                    <a
                        href={`/portfolio/${project.slug}`}
                        class="block group h-full"
                    >
                        <div
                            class="bg-card rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl h-full"
                        >
                            <div class="relative h-48 md:h-64">
                                <img
                                    src={project.imageUrl}
                                    alt={project.title}
                                    class="transition-transform duration-300 group-hover:scale-105 object-cover w-full h-full"
                                />
                            </div>
                            <div class="p-4">
                                <h3 class="text-lg font-semibold mb-2">
                                    {project.title}
                                </h3>
                                <p class="text-muted-foreground">
                                    {project.description}
                                </p>
                            </div>
                        </div>
                    </a>
                </div>
            {:else}
                <!-- Regular Cards -->
                <a href={`/portfolio/${project.slug}`} class="block group">
                    <div
                        class="bg-card rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl"
                    >
                        <div class="relative h-48 md:h-64">
                            <img
                                src={project.imageUrl}
                                alt={project.title}
                                class="transition-transform duration-300 group-hover:scale-105 object-cover w-full h-full"
                            />
                        </div>
                        <div class="p-4">
                            <h3 class="text-lg font-semibold mb-2">
                                {project.title}
                            </h3>
                            <p class="text-muted-foreground">
                                {project.description}
                            </p>
                        </div>
                    </div>
                </a>
            {/if}
        {/each}
    </div>
</div>

<style>
    .text-muted-foreground {
        color: #666;
    }
    .bg-card {
        background-color: #fff;
    }
</style>
