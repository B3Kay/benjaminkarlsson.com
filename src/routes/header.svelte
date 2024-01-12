<script lang="ts">
    import * as config from "$lib/config";
    import Toggle from "./toggle.svelte";
</script>

<nav class="block p-7 sm:flex sm:space-x-0 justify-between">
    <a href="/" class="title">
        <b>{config.title}</b>
    </a>
    <ul class="flex gap-12 font-bold text-sm">
        <li class="">
            <a class="inherit decoration-0" href="/blog">Blog</a>
        </li>
        <li class="">
            <a class="inherit decoration-0" href="/about">About</a>
        </li>
        <li class="">
            <a class="inherit decoration-0" href="/contact">Contact</a>
        </li>
    </ul>
    <Toggle />
</nav>
