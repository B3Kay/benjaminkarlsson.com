<script lang="ts">
    import { formatDate } from "$lib/utils";
    import * as config from "$lib/config.js";

    // biome-ignore lint/suspicious/noImplicitAnyLet: <explanation>
    export let data;
</script>

<svelte:head>
    <title>{config.title}</title>
</svelte:head>

<div class="container mx-auto px-4 py-8 md:py-10">
    <header class="text-center mb-8 md:mb-10">
        <h1
            class="text-3xl md:text-4xl font-bold mb-3 md:mb-4 brightness-150 contrast-150"
        >
            <span class="brightness-150 contrast-150"> My Projects </span>
            <img
                class="w-12 inline"
                src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Robot.png"
                alt="Star-Struck"
            />
        </h1>
        <p class="text-lg md:text-xl text-muted-foreground">
            Versatile Fullstack Engineer a Passion for UI and Frontend.
        </p>
    </header>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {#each data.portfolio as project}
            <div
                class="bg-white/10 rounded-lg overflow-hidden border border-gray-700 shadow-none transition-all duration-300 hover:shadow-xl h-fit"
            >
                <a href={`/portfolio/${project.slug}`} class="block group">
                    {#if project.imageUrl && project.imageUrl.trim() !== ""}
                        <img
                            src={project.imageUrl}
                            alt={project.title}
                            class="transition-transform duration-300 group-hover:scale-105 object-cover w-full h-full max-h-60"
                        />
                    {/if}
                    <div class="p-6 md:p-8">
                        <h3
                            class="text-xl md:text-2xl font-semibold mb-2 md:mb-3 brightness-150 contrast-150"
                        >
                            {project.title}
                        </h3>
                        <p
                            class="text-muted-foreground text-xs md:text-sm mb-4 md:mb-5"
                        >
                            {project.description}
                        </p>
                        <span class="flex flex-wrap gap-1 md:gap-2 py-1">
                            {#each project.categories.slice(0, 5) as category}
                                <span class="badge badge-neutral"
                                    >{category}</span
                                >
                            {/each}

                            {#if project.categories.length > 5}
                                <span class="badge badge-neutral">
                                    +{project.categories.length - 5} more
                                </span>
                            {/if}
                        </span>
                    </div>
                </a>
            </div>
        {/each}
    </div>
</div>
