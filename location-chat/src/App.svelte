<script>
  import { Router, Link, Route } from "svelte-routing";
  import TopPageComponent from "./pages/TopPageComponent.svelte";
  import HomePageComponent from "./pages/HomePageComponent.svelte";
</script>

<Router>
  <main>
    <Route path="/" component={TopPageComponent} />
    <Route path="/home/*." component={HomePageComponent} />
  </main>
</Router>
