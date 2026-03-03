<script lang="ts">
    import * as config from "$lib/config";
    import { Github, Instagram, Linkedin } from "lucide-svelte";
</script>

<footer class="border-t border-base-300 px-6 py-16">
    <div class="m-auto max-w-5xl">
        <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
            <div>
                <p class="text-sm font-semibold tracking-tight">Benjamin Karlsson</p>
                <p class="text-sm text-base-content/40 mt-2 max-w-xs">
                    Tech Lead, builder, and full stack developer. Writing about tech, productivity, and things I find interesting.
                </p>
            </div>

            <div class="flex gap-12">
                <div class="flex flex-col gap-2">
                    <p class="text-xs text-base-content/30 uppercase tracking-wider mb-1">Navigation</p>
                    <a class="text-sm text-base-content/50 hover:text-base-content transition-colors" href="/">Home</a>
                    <a class="text-sm text-base-content/50 hover:text-base-content transition-colors" href="/blog">Blog</a>
                    <a class="text-sm text-base-content/50 hover:text-base-content transition-colors" href="/portfolio">Portfolio</a>
                    <a class="text-sm text-base-content/50 hover:text-base-content transition-colors" href="/about">About</a>
                </div>
                <div class="flex flex-col gap-2">
                    <p class="text-xs text-base-content/30 uppercase tracking-wider mb-1">Connect</p>
                    <a class="text-sm text-base-content/50 hover:text-base-content transition-colors" href="https://github.com/B3Kay" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a class="text-sm text-base-content/50 hover:text-base-content transition-colors" href="https://www.linkedin.com/in/benjik/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a class="text-sm text-base-content/50 hover:text-base-content transition-colors" href="https://www.instagram.com/BENJIMINK_" target="_blank" rel="noopener noreferrer">Instagram</a>
                </div>
            </div>
        </div>

        <div class="flex justify-between items-center pt-10 mt-10 border-t border-base-300 text-xs text-base-content/30">
            <p>&copy; {new Date().getFullYear()} {config.title}</p>
            <div class="flex gap-4">
                <a href="https://github.com/B3Kay" target="_blank" rel="noopener noreferrer" class="hover:text-base-content transition-colors"><Github size={16} /></a>
                <a href="https://www.linkedin.com/in/benjik/" target="_blank" rel="noopener noreferrer" class="hover:text-base-content transition-colors"><Linkedin size={16} /></a>
                <a href="https://www.instagram.com/BENJIMINK_" target="_blank" rel="noopener noreferrer" class="hover:text-base-content transition-colors"><Instagram size={16} /></a>
            </div>
        </div>
    </div>
</footer>
