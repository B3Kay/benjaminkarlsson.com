<script lang="ts">
    import * as config from "$lib/config";
    import { Menu } from "lucide-svelte";
    import Toggle from "./toggle.svelte";
    import { toggleTheme } from "$lib/theme";
</script>

<nav class="p-7 flex content-between justify-between">
    <a href="/" class="title">
        <b>{config.title}</b>
    </a>
    <ul class="hidden md:flex gap-12 font-bold text-sm">
        <li class="">
            <a class="inherit decoration-0" href="/blog">Blog</a>
        </li>
        <li class="">
            <a class="inherit decoration-0" href="/about">About</a>
        </li>
    </ul>
    <div class="flex gap-2">
        <div class="hidden md:flex">
            <Toggle />
        </div>
        <details class="dropdown dropdown-bottom dropdown-end block md:hidden">
            <summary class="m-1 btn btn-ghost btn-square sm:btn-sm"
                ><Menu /></summary
            >
            <ul
                class="p-2 shadow menu dropdown-content z-[1] bg-base-200 rounded-box w-52"
            >
                <li class="">
                    <a class="inherit decoration-0" href="/">Home</a>
                </li>
                <li class="">
                    <a class="inherit decoration-0" href="/blog">Blog</a>
                </li>
                <li class="">
                    <a class="inherit decoration-0" href="/about">About</a>
                </li>
                <li class="">
                    <button on:click={toggleTheme} class="inherit decoration-0"
                        >Toggle theme</button
                    >
                </li>
            </ul>
        </details>
    </div>
</nav>
