<script>
    import { selectedReplyMessage } from "../../store"
  
    export let message;
  
    const onClickCloseButton = () => {
      $selectedReplyMessage = null
    }
  </script>
  
  <div class="chat-message-wrap">
    <div class="chat-message-headline message-padding">
      <div class="chat-message-headline-user"></div>
      <span class="chat-message-headline-datetime">{message.updated}</span>
    </div>
    <div class="chat-message-area message-padding">
      <p>{message.message}</p>
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
    .chat-message-header {
      display: flex;
      align-items: center;
      padding: 4px 12px;
    }
    .chat-message-header-close {
      border-radius: 50%;
      padding: 2px;
      font-size: 18px;
      cursor: pointer;
      color: tomato;
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
  </style>
  