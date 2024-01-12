<script lang="ts">
    import { page } from "$app/stores";
</script>

<main class="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
    <div class="text-center">
        <p class="text-base font-semibold text-primary">{$page.status}</p>
        <h1 class="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
            {$page.error?.message}
        </h1>
        <p class="mt-6 text-base leading-7 text-gray-600">
            Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div class="mt-10 flex items-center justify-center gap-x-6">
            <a href="/" class="btn btn-primary normal-case">Go back home</a>
            <!-- <a href="#" class="link link-hover c"
                >Contact <span aria-hidden="true">&rarr;</span></a
            > -->
        </div>
    </div>
</main>
