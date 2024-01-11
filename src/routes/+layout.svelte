<script>
  import "../app.css";

  import Header from "./header.svelte";
  import Footer from "./footer.svelte";
</script>

<div class="h-full max-w-screen-sxl grid grid-rows-layout">
  <Header></Header>

  <main class="md:p-0 p-9 m-7">
    <slot />
  </main>
  <Footer></Footer>
</div>
