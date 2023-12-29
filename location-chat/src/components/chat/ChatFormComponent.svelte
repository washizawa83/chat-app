<script>
  import FaRegPaperPlane from "svelte-icons/fa/FaRegPaperPlane.svelte";
  import {
    selectedReplyMessage,
    replyMessages,
    testReplyMessages,
  } from "../../stores/ChatStore";
  import ChatReplyMessageComponent from "./ChatReplyMessageComponent.svelte";

  let inputMessage = "";

  const submitMessage = () => {
    if (inputMessage === "") return;
    const newMessage = {
      id: 3,
      messageId: $selectedReplyMessage.id,
      message: inputMessage,
      updated: "2023/12/23 19:30",
    };
    $replyMessages = [...$replyMessages, newMessage];
    $testReplyMessages = [...$testReplyMessages, newMessage];
    inputMessage = "";
  };

  const backToOverall = () => {
    $selectedReplyMessage = null;
  };
</script>

<div class="chat-form-wrap">
  <span class:reply-line={$selectedReplyMessage}></span>
  <button
    on:click={backToOverall}
    class="from-overall-button"
    class:disabled={!$selectedReplyMessage}>Overall</button
  >
  {#if $selectedReplyMessage}
    <ChatReplyMessageComponent message={$selectedReplyMessage} />
    {#each $replyMessages as replyMessage}
      <ChatReplyMessageComponent
        message={replyMessage}
        isRepliedMessage={true}
      />
    {/each}
  {/if}
  <div class="chat-form-message">
    <span class:overall={!$selectedReplyMessage}></span>
    <div class="chat-form">
      <textarea
        bind:value={inputMessage}
        class="chat-form-textarea"
        name="char-form"
        id=""
        cols="30"
        rows="1"
      ></textarea>
      <div class="chat-form-menu">
        <button on:click={submitMessage} class="chat-form-cast-button"
          ><FaRegPaperPlane /></button
        >
      </div>
    </div>
  </div>
</div>

<style>
  .chat-form-wrap {
    position: relative;
    width: 100%;
    box-sizing: border-box;
    border-radius: 8px;
  }
  .reply-line {
    height: 100%;
    left: 10px;
    position: absolute;
    border-left: 2px solid tomato;
    z-index: 0;
  }
  .overall {
    position: absolute;
    z-index: 0;
    border: 1px solid tomato;
    width: 100%;
    left: -20px;
    top: 20px;
  }
  .from-overall-button {
    position: absolute;
    z-index: 3;
    top: -20px;
    border: none;
    background-color: transparent;
    color: tomato;
    font-size: 14px;
    cursor: pointer;
  }
  .from-overall-button.disabled {
    color: gray;
    cursor: auto;
  }
  .chat-form {
    height: 100%;
    padding: 8px;
    box-sizing: border-box;
    border-radius: 8px;
    background-color: white;
    position: relative;
    border: 2px solid tomato;
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
