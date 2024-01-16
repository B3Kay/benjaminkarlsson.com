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
        <div class="dropdown dropdown-bottom dropdown-end block md:hidden">
            <div
                tabindex="0"
                role="button"
                class="btn m-1 btn-ghost btn-square sm:btn-sm"
            >
                <Menu />
            </div>
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
</nav>
<div class="drawer">
    <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content flex flex-col">
        <!-- Navbar -->
        <div class="w-full navbar bg-base-300">
            <div class="flex-none lg:hidden">
                <label
                    for="my-drawer-3"
                    aria-label="open sidebar"
                    class="btn btn-square btn-ghost"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        class="inline-block w-6 h-6 stroke-current"
                        ><path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        ></path></svg
                    >
                </label>
            </div>
            <div class="flex-1 px-2 mx-2">Navbar Title</div>
            <div class="flex-none hidden lg:block">
                <ul class="menu menu-horizontal">
                    <!-- Navbar menu content here -->
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
                        <button
                            on:click={toggleTheme}
                            class="inherit decoration-0">Toggle theme</button
                        >
                    </li>
                </ul>
            </div>
        </div>
        <!-- Page content here -->
        Content
    </div>
    <div class="drawer-side">
        <label
            for="my-drawer-3"
            aria-label="close sidebar"
            class="drawer-overlay"
        ></label>
        <ul class="menu p-4 w-80 min-h-full bg-base-200">
            <!-- Sidebar content here -->
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
    </div>
</div>
