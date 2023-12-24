<script>
  import FaRegPaperPlane from 'svelte-icons/fa/FaRegPaperPlane.svelte'
  import { selectedReplyMessage, replyMessages, testReplyMessages } from '../../store';
  import ChatReplyMessageComponent from './ChatReplyMessageComponent.svelte';

  let inputMessage = "";

  const submitMessage = () => {
    if (inputMessage === "") return
    const newMessage = {
      id: 3,
      messageId: $selectedReplyMessage.id,
      message: inputMessage,
      updated: "2023/12/23 19:30"
    }
    $replyMessages = [
      ...$replyMessages,
      newMessage
    ]
    $testReplyMessages = [...$testReplyMessages, newMessage]
    inputMessage = ""
  }
</script>

<div class="chat-form-wrap">
  {#if $selectedReplyMessage}
    <ChatReplyMessageComponent message={$selectedReplyMessage} />
    {#each $replyMessages as replyMessage}
      <ChatReplyMessageComponent message={replyMessage} />
    {/each}
  {/if}
  <div class="chat-form-message">
    <div class="chat-form">
      <textarea
        bind:value={inputMessage}
        class="chat-form-textarea"
        name="char-form"
        id=""
        cols="30"
        rows="5"
      ></textarea>
      <div class="chat-form-menu">
        <button on:click={submitMessage} class="chat-form-cast-button"><FaRegPaperPlane /></button>
      </div>
    </div>
  </div>
</div>

<style>
  .chat-form-wrap {
    width: 100%;
    box-sizing: border-box;
    border-radius: 8px;
  }
  .chat-form {
    height: 100%;
    padding: 8px;
    box-sizing: border-box;
    border-radius: 8px;
    background-color: white;
  }
  .chat-form-textarea {
    width: 100%;
    box-sizing: border-box;
    resize: none;
    border: none;
    border-radius: 8px;
    outline: none;
    padding: 8px;
    box-sizing: border-box;
    font-size: 14px;
    letter-spacing: 3px;
  }
  .chat-form-menu {
    display: flex;
    justify-content: end;
    align-items: center;
    padding-top: 8px;
    background-color: white;
    border-top: 1px solid tomato;
  }
  .chat-form-cast-button {
    height: 30px;
    width: 50px;
    padding: 2px;
    box-sizing: border-box;
    color: white;
    background-color: tomato;
    font-size: 16px;
    border: 2px solid tomato;
    border-radius: 8px;
    cursor: pointer;
  }
</style>
