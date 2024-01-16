<script lang="ts">
    import { fly } from "svelte/transition";
    import { Moon, Sun } from "lucide-svelte";
    import { theme, toggleTheme } from "$lib/theme";
</script>

<label class="swap swap-rotate">
    <input
        aria-label="Toggle Theme"
        on:click={toggleTheme}
        type="checkbox"
        class="theme-controller w-10"
        value="synthwave"
    />
    <Sun class="swap-on"></Sun>
    <Moon class="swap-off"></Moon>
</label>
