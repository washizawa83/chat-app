<div class="chat-form-wrap">
  <form action="" class="chat-form">
    <textarea
      class="chat-form-textarea"
      name="char-form"
      id=""
      cols="30"
      rows="5"
    ></textarea>
    <div class="chat-form-menu">
      <button class="chat-form-cast-button">Cast</button>
    </div>
  </form>
</div>

<style>
  .chat-form-wrap {
    height: 20%;
    width: 100%;
    background-color: white;
    box-sizing: border-box;
  }
  .chat-form {
    height: 100%;
  }
  .chat-form-textarea {
    width: 100%;
    box-sizing: border-box;
    resize: none;
    border: none;
    border-radius: 8px;
    border-bottom: 1px solid tomato;
    background-color: darkgray;
    outline: none;
  }
  .chat-form-menu {
    display: flex;
    justify-content: end;
    align-items: center;
  }
  .chat-form-cast-button {
    height: 30px;
    width: 100px;
    background-color: tomato;
    color: white;
    font-size: 16px;
    border: none;
    border-radius: 8px;
    margin: 0 30px;
  }
</style>
