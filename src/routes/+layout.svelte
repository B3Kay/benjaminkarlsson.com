<script>
  import "../app.css";

  import Header from "./header.svelte";
  import Footer from "./footer.svelte";
</script>

<svelte:head>
  <script
    data-goatcounter="https://benjaminkarlsson.goatcounter.com/count"
    async
    src="//gc.zgo.at/count.js"
  ></script>
</svelte:head>

<div class="min-h-screen flex flex-col">
  <Header></Header>

  <main class="flex-1">
    <slot />
  </main>
  <Footer></Footer>
</div>
