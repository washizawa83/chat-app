<script>
  import ChatFormComponent from "./ChatFormComponent.svelte";
  import ChatMessageComponent from "./ChatMessageComponent.svelte";
  import { testMessages } from "../../store";
  import { onMount } from "svelte";

  let messages;

  onMount(() => {
    messages = $testMessages
  })
</script>

<section class="chat-wrap">
  {#if messages}
  <div class="chat-message-list">
    {#each messages as message}
     <ChatMessageComponent message={message}  />
    {/each}
  </div>
  <div class="chat-message-form">
    <ChatFormComponent />
  </div>
  {/if}
</section>

<style>
  .chat-wrap {
    display: flex;
    height: 100vh;
    width: 100%;
    background-color: rgba(220, 220, 220, 0.609);
    box-sizing: border-box;
  }
  .chat-message-list {
    height: 100vh;
    width: 60%;
    overflow: scroll;
    padding: 0 50px;
    box-sizing: border-box;
  }
  .chat-message-form {
    height: 100vh;
    width: 40%;
    padding: 20px;
    box-sizing: border-box;
    overflow: scroll;
  }
</style>
