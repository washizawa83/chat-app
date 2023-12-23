<script>
  import CharFormComponent from "./CharFormComponent.svelte";
  import ChatMessageComponent from "./ChatMessageComponent.svelte";
</script>

<section class="chat-wrap">
  <ChatMessageComponent />
  <CharFormComponent />
</section>

<style>
  .chat-wrap {
    height: 100vh;
    width: 100%;
    background-color: gainsboro;
    box-sizing: border-box;
  }
</style>
