<script>
  import AuthComponent from "../components/AuthComponent.svelte";
</script>

<section class="top">
  <div class="top-image">
    <h1 class="top-title">Location Chat</h1>
    <div class="top-main">
      <AuthComponent />
    </div>
  </div>
</section>

<style>
  .top {
    width: 100%;
    height: 100vh;
  }
  .top-image {
    width: 100%;
    height: 100%;
    background-image: url("/images/top.jpg");
    background-repeat: no-repeat;
    background-size: cover;
  }
  .top-title {
    font-size: 120px;
    padding: 20px;
    color: tomato;
    font-family: system-ui;
  }
  .top-main {
    display: flex;
    flex-direction: row-reverse;
  }
</style>
