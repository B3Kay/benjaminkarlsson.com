<script lang="ts">
    import * as config from "$lib/config";
    import Aboutme from "./about.md";
</script>

<svelte:head>
    <title>About - {config.title}</title>
    <meta name="description" content="About Benjamin Karlsson — Tech Lead and full stack developer specializing in remote team leadership and AI-accelerated delivery." />
    <meta property="og:type" content="profile" />
    <meta property="og:title" content="About - {config.title}" />
    <meta property="og:description" content="About Benjamin Karlsson — Tech Lead and full stack developer specializing in remote team leadership and AI-accelerated delivery." />
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
