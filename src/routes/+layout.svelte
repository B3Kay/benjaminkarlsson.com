<script>
  import "../app.css";

  import Header from "./header.svelte";
  import Footer from "./footer.svelte";
</script>

<div class="h-full max-w-screen-sxl grid grid-rows-layout">
  <Header></Header>

  <main class="p-0 md:p-9 m-6">
    <slot />
  </main>
  <Footer></Footer>
</div>
