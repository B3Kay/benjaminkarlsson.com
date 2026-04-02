<script lang="ts">
    import * as config from "$lib/config";
    import Aboutme from "./contact.md";
</script>

<svelte:head>
    <title>Contact - {config.title}</title>
    <meta name="description" content="Get in touch with Benjamin Karlsson. Available for technical leadership, remote team hiring, and full stack delivery engagements." />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Contact - {config.title}" />
    <meta property="og:description" content="Get in touch with Benjamin Karlsson. Available for technical leadership, remote team hiring, and full stack delivery engagements." />
</svelte:head>

<article class="ms-auto me-auto prose max-w-2xl mb-16">
    <hgroup>
        <h1 class="text-4xl capitalize">Contact</h1>
    </hgroup>
    <Aboutme />
</article>
