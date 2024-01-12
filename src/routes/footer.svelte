<script lang="ts">
    import * as config from "$lib/config";
</script>

<footer class="block sm:space-x-0 px-6 py-24 sm:py-32">
    <div class="w-full">
        <img
            class="w-12 inline"
            src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Face%20with%20Monocle.png"
            alt="Star-Struck"
        />
        <!-- <div class=" gap-7"> -->
        <ul class="mt-16 grid grid-flow-col gap-12 font-bold text-sm">
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
                <a class="inherit decoration-0" href="/contact">Contact</a>
            </li>
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

    <div class="flex pt-10 mt-10 border-t-base-300 border-t-1 text-neutral-600">
        <p>&copy {new Date().getFullYear()} {config.title}</p>
    </div>
</footer>
