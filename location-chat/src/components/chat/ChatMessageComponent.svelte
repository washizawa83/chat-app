<script>
  import { onMount } from "svelte";
  import { selectedReplyMessage, replyMessages, testReplyMessages } from "../../store"

  export let message;
  let isMessageFormVisible = false

  onMount(() => {
    isMessageFormVisible = Boolean(message.id === $selectedReplyMessage?.id)
  })

  const onClickReplay = (message) => {
    changeSelectReplyMessage(message)
    getReplyMessages(message)
  }

  const changeSelectReplyMessage = (message) => {
    $selectedReplyMessage = message
  }

  const getReplyMessages = (selectedMessage) => {
    $replyMessages = $testReplyMessages.filter((message) => message.messageId === selectedMessage.id)
  }

  const onClickCloseButton = () => {
    $selectedReplyMessage = null
  }
</script>

<div class="chat-message-wrap" class:is-selected-replay-message={ message.id === $selectedReplyMessage?.id}>
  <div class="chat-message-headline message-padding">
    <div class="chat-message-headline-user"></div>
    <span class="chat-message-headline-datetime">{message.updated}</span>
  </div>
  <div class="chat-message-area message-padding">
    <p>{message.message}</p>
  </div>
  <div class="chat-message-reply message-padding">
    <span on:click={onClickReplay(message)}>Reply</span>
  </div>
</div>

<style>
  .chat-message-wrap {
    background-color: white;
    border-radius: 8px;
    margin-bottom: 30px;
    overflow: hidden;
    border: 1px solid transparent;
    box-sizing: border-box;
  }
  .is-selected-replay-message {
    border: 2px solid tomato;
  }
  .message-padding {
    padding: 12px;
  }
  .chat-message-headline {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .chat-message-headline-user {
    width: 30px;
    height: 30px;
    background-color: cadetblue;
    border-radius: 50%;
    overflow: hidden;
  }
  .chat-message-area {
    white-space: break-spaces;
  }
  .chat-message-headline-datetime {
    font-size: 14px;
  }
  .chat-message-reply span {
    font-size: 14px;
    text-decoration: none;
    color: tomato;
    cursor: pointer;
  }
</style>
