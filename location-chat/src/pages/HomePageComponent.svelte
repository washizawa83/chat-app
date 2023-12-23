<script>
  import SidebarComponent from "../components/SidebarComponent.svelte";
  import ChatComponent from "../components/chat/ChatComponent.svelte";
</script>

<section class="home-wrap">
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
  }
  .home-main {
    height: 100vh;
    width: 100%;
  }
</style>
