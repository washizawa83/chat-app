<script>
  import ChatFormComponent from "../components/chat/ChatFormComponent.svelte";
  import ChatMessageComponent from "../components/chat/ChatMessageComponent.svelte";
  import {
    testMessages,
    isGetLocation,
    selectedReplyMessage,
  } from "../stores/ChatStore";
  import { onMount } from "svelte";

  let messages;
  let messageListElement;

  onMount(() => {
    messages = $testMessages;
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  });

  const successCallback = (position) => {
    // 緯度
    var latitude = position.coords.latitude;
    // 経度
    var longitude = position.coords.longitude;
    console.log(latitude);
    console.log(longitude);
    $isGetLocation = true;
  };
  // 取得に失敗した場合の処理
  const errorCallback = (error) => {
    alert("位置情報が取得できませんでした");
  };

  const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  isGetLocation.subscribe(async (value) => {
    if (!value) return;
    await wait(100);
    messageListElement.scrollTo(0, messageListElement.scrollHeight);
  });
</script>

{#if $isGetLocation}
  <section class="chat-wrap">
    {#if messages}
      <div class="chat-message">
        <ul
          class="chat-message-wrap"
          class:overall={!$selectedReplyMessage}
          bind:this={messageListElement}
        >
          {#each messages as message}
            <li class="chat-message-list">
              <ChatMessageComponent {message} />
            </li>
          {/each}
        </ul>
      </div>
      <div class="chat-form">
        <ChatFormComponent />
      </div>
    {/if}
  </section>
{/if}

<style>
  .chat-wrap {
    display: flex;
    height: 100vh;
    width: 100%;
    background-color: rgba(220, 220, 220, 0.609);
    box-sizing: border-box;
  }
  .overall {
    border-right: 2px solid tomato;
  }
  .chat-message {
    height: 100vh;
    width: 60%;
  }
  .chat-message-wrap {
    height: 100%;
    width: 100%;
    overflow-y: scroll;
    padding: 0 50px;
    box-sizing: border-box;
  }
  .chat-form {
    height: 100vh;
    width: 40%;
    padding: 20px;
    box-sizing: border-box;
    overflow-y: scroll;
  }
</style>
