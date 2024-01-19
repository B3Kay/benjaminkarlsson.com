<script lang="ts">
    import * as config from "$lib/config";
    import { Facebook, Github, Instagram, Linkedin } from "lucide-svelte";
</script>

<footer class="block px-6 py-24 sm:py-32 bg-base-200 justify-center">
    <div class="m-auto max-w-7xl">
        <h3 class="text-3xl font-bold tracking-tight sm:text-xl">
            Is this the end? <img
                class="w-12 inline"
                src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Face%20with%20Monocle.png"
                alt="Star-Struck"
            />
        </h3>
        <p class="max-w-prose mt-5 text-sm leading-6">
            I like to blog about stuff like productivity, business, health &
            fitness, and other stuff I'm interested in. Hopefully you'll find
            some of it interesting too.
        </p>

        <ul class="mt-16 grid grid-flow-col gap-8 font-bold text-sm">
            <li class="">
                <a class="btn btn-ghost inherit" href="/">Home</a>
            </li>
            <li class="">
                <a class="btn btn-ghost inherit" href="/blog">Blog</a>
            </li>
            <li class="">
                <a class="btn btn-ghost inherit" href="/about">About</a>
            </li>
            <!-- <li class="">
                <a class="inherit decoration-0" href="/contact">Contact</a>
            </li> -->
        </ul>
        <!-- </div> -->
    </div>
    <!-- Newsletter signup -->
    <!-- <div class="flex justify-between pt-10 mt-20 border-t-base-300 border-t-2">
        <div class="">
            <h5 class="font-bold">Subscribe to our Newsletter</h5>
            <p class="mt-2">
                Latest news, articles and resources, sent to your inbox.
            </p>
        </div>
        <div class="flex">
            <input
                type="text"
                placeholder="Enter your email"
                class="input input-bordered w-full max-w-xs"
            /><button class="btn btn-primary normal-case ml-5">Subscribe</button
            >
        </div>
    </div> -->

    <div
        class="max-w-7xl m-auto flex justify-between pt-10 mt-10 border-t-base-300 border-t-1 text-neutral-600"
    >
        <p>
            &copy {new Date().getFullYear()}
            {config.title}, All right reserved.
        </p>
        <ul class="grid grid-flow-col gap-4">
            <li>
                <a
                    href="https://www.instagram.com/BENJIMINK_"
                    target="_blank"
                    rel="noopener noreferrer"><Instagram /></a
                >
            </li>
            <li>
                <a
                    href="https://github.com/B3Kay"
                    target="_blank"
                    rel="noopener noreferrer"><Github /></a
                >
            </li>
            <li>
                <a
                    href="https://www.linkedin.com/in/benjik/"
                    target="_blank"
                    rel="noopener noreferrer"><Linkedin /></a
                >
            </li>
        </ul>
    </div>
</footer>
