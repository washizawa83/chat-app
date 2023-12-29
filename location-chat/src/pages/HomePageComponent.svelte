<script>
  import SidebarComponent from "../layouts/SidebarComponent.svelte";
  import ChatComponent from "../layouts/ChatComponent.svelte";
  import { isGetLocation } from "../stores/ChatStore";
  import LodingComponent from "../layouts/LodingComponent.svelte";
</script>

<section class="home-wrap">
  <LodingComponent />
  <SidebarComponent />
  <section class="home-main">
    <ChatComponent />
  </section>
</section>

<style>
  .home-wrap {
    height: 100vh;
    width: 100%;
    display: flex;
    position: relative;
  }
  .home-main {
    height: 100vh;
    width: 100%;
  }
</style>
