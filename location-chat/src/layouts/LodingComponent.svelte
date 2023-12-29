<script>
  import FaMapMarkerAlt from "svelte-icons/fa/FaMapMarkerAlt.svelte";
  import { isGetLocation } from "../stores/ChatStore";
</script>

<section class="loading-wrap" class:is-completed-loading={$isGetLocation}>
  <div class="map-icon"><FaMapMarkerAlt /></div>
</section>

<style>
  .loading-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    background-color: white;
    position: absolute;
  }
  .is-completed-loading {
    display: none;
  }
  .map-icon {
    width: 300px;
    height: 300px;
    color: tomato;
    animation: rotateAnimation 3s infinite linear;
    transform: translateZ(30px);
  }
  @keyframes rotateAnimation {
    from {
      transform: rotateY(0deg); /* 開始時の回転角度 */
    }
    to {
      transform: rotateY(360deg); /* 終了時の回転角度 */
    }
  }
</style>
