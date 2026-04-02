<script lang="ts">
    import * as config from "$lib/config";
    import { Menu } from "lucide-svelte";
    import Toggle from "./toggle.svelte";
    import { toggleTheme } from "$lib/theme";
</script>

<nav class="flex items-center justify-between px-6 py-4 border-b border-base-300">
    <a class="text-sm font-semibold tracking-tight hover:opacity-70 transition-opacity" href="/">
        Benjamin Karlsson
    </a>

    <div class="hidden md:flex items-center gap-8">
        <a class="text-sm text-base-content/60 hover:text-base-content transition-colors" href="/">Home</a>
        <a class="text-sm text-base-content/60 hover:text-base-content transition-colors" href="/blog">Blog</a>
        <a class="text-sm text-base-content/60 hover:text-base-content transition-colors" href="/portfolio">Portfolio</a>
        <a class="text-sm text-base-content/60 hover:text-base-content transition-colors" href="/about">About</a>
        <Toggle />
        <a class="text-sm font-medium px-4 py-2 bg-base-content text-base-100 rounded-lg hover:opacity-90 transition-opacity" href="mailto:hi@benjaminkarlsson.com?subject=Project inquiry">Work with me</a>
    </div>

    <div class="dropdown dropdown-bottom dropdown-end block md:hidden">
        <div
            tabindex="0"
            role="button"
            class="p-2 hover:opacity-70 transition-opacity"
        >
            <Menu size={20} />
        </div>
        <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
        <ul
            tabindex="0"
            class="p-3 shadow-lg dropdown-content z-[1] bg-base-200 border border-base-300 rounded-lg w-48 mt-2"
        >
            <li>
                <a class="block py-2 px-3 text-sm text-base-content/60 hover:text-base-content rounded-md hover:bg-base-300 transition-colors" href="/">Home</a>
            </li>
            <li>
                <a class="block py-2 px-3 text-sm text-base-content/60 hover:text-base-content rounded-md hover:bg-base-300 transition-colors" href="/blog">Blog</a>
            </li>
            <li>
                <a class="block py-2 px-3 text-sm text-base-content/60 hover:text-base-content rounded-md hover:bg-base-300 transition-colors" href="/portfolio">Portfolio</a>
            </li>
            <li>
                <a class="block py-2 px-3 text-sm text-base-content/60 hover:text-base-content rounded-md hover:bg-base-300 transition-colors" href="/about">About</a>
            </li>
            <li class="border-t border-base-300 mt-2 pt-2">
                <a class="block py-2 px-3 text-sm font-medium text-base-content hover:bg-base-300 rounded-md transition-colors" href="mailto:hi@benjaminkarlsson.com?subject=Project inquiry">Work with me</a>
            </li>
            <li>
                <button on:click={toggleTheme} class="block w-full text-left py-2 px-3 text-sm text-base-content/60 hover:text-base-content rounded-md hover:bg-base-300 transition-colors">
                    Toggle theme
                </button>
            </li>
        </ul>
    </div>
</nav>
