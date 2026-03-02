<script lang="ts">
    import * as config from "$lib/config";
    import Aboutme from "./about.md";
</script>

<svelte:head>
    <title>About - {config.title}</title>
    <meta name="description" content="Learn about Benjamin Karlsson - developer, designer, creator, and avid traveler with 5+ years in the IT industry." />
    <meta property="og:type" content="profile" />
    <meta property="og:title" content="About - {config.title}" />
    <meta property="og:description" content="Learn about Benjamin Karlsson - developer, designer, creator, and avid traveler with 5+ years in the IT industry." />
</svelte:head>

<article class="ms-auto me-auto prose max-w-2xl mb-16">
    <hgroup>
        <h1 class="text-4xl capitalize">About me</h1>
        <p>
            I'm a developer, designer, creator, avid traveler, learning
            enthusiast and occasional investor as well.
        </p>
    </hgroup>
    <Aboutme />
</article>
