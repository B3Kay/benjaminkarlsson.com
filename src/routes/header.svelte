<script lang="ts">
    import * as config from "$lib/config";
    import Toggle from "./toggle.svelte";
</script>

<nav class="block p-7 sm:flex sm:space-x-0 content-between justify-between">
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
        <Toggle />

        <div class="dropdown dropdown-bottom dropdown-end block md:hidden">
            <button
                tabindex="0"
                role="button"
                class="btn btn-ghost btn-square btn-sm m-1"
                ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    class="inline-block w-5 h-5 stroke-current"
                    ><path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 6h16M4 12h16M4 18h16"
                    ></path></svg
                ></button
            >
            <ul
                class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
                <li class="">
                    <a class="inherit decoration-0" href="/blog">Blog</a>
                </li>
                <li class="">
                    <a class="inherit decoration-0" href="/about">About</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
