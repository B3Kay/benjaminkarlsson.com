<script lang="ts">
    import * as config from "$lib/config";
    import { Menu } from "lucide-svelte";
    import Toggle from "./toggle.svelte";
    import { toggleTheme } from "$lib/theme";
</script>

<!-- New nav -->
<div class="navbar bg-base-100 px-6">
    <div class="navbar-start">
        <a class="btn btn-ghost normal-case" href="/">Benjamin Karlsson</a>
    </div>
    <div class="navbar-center hidden md:flex">
        <ul class="menu menu-horizontal px-1">
            <li class="">
                <a class="inherit decoration-0" href="/">Home</a>
            </li>
            <li class="">
                <a class="inherit decoration-0" href="/blog">Blog</a>
            </li>
            <li class="">
                <a class="inherit decoration-0" href="/portfolio">Portfolio</a>
            </li>
            <li class="">
                <a class="inherit decoration-0" href="/about">About</a>
            </li>
        </ul>
    </div>
    <div class="navbar-end">
        <div class="hidden md:flex">
            <Toggle />
        </div>
        <div class="dropdown dropdown-bottom dropdown-end block md:hidden">
            <div
                tabindex="0"
                role="button"
                class="btn m-1 btn-ghost btn-square sm:btn-sm"
            >
                <Menu />
            </div>
            <!-- We can't use <button> here because Safari has a bug that prevents the button from being focused. -->
            <!-- <div role="button" tabindex="0"> is a workaround for this bug. -->
            <!-- It is accessible and works in all browsers. -->
            <!-- https://bugs.webkit.org/show_bug.cgi?id=22261 -->
            <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
            <ul
                tabindex="0"
                class="p-2 shadow menu dropdown-content z-[1] bg-base-200 rounded-box w-52"
            >
                <li class="">
                    <a class="inherit decoration-0" href="/">Home</a>
                </li>
                <li class="">
                    <a class="inherit decoration-0" href="/blog">Blog</a>
                </li>
                <li class="">
                    <a class="inherit decoration-0" href="/portfolio"
                        >Portfolio</a
                    >
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
        </div>
    </div>
</div>
