<script>
  import { navigate } from "svelte-routing";
  let isLoginForm = true;

  const switchingAuthentication = () => {
    isLoginForm = !isLoginForm;
  };

  const login = () => {
    navigate("/home", { replace: true });
  };
</script>

<section class="auth">
  {#if isLoginForm}
    <h2 class="auth-headline">Login</h2>
  {:else}
    <h2 class="auth-headline">Signin</h2>
  {/if}
  <form on:submit|preventDefault={login} action="submit" class="auth-form">
    <div class="auth-email auth-input-wrap">
      <div class="auth-label-wrap">
        <span class="auth-label-decoration"></span>
        <label class="auth-label" for="email">Email</label>
      </div>
      <input class="auth-input" type="email" id="email" />
    </div>
    <div class="auth-password auth-input-wrap">
      <div class="auth-label-wrap">
        <span class="auth-label-decoration"></span>
        <label class="auth-label" for="password">Password</label>
      </div>
      <input class="auth-input" type="password" />
    </div>
    {#if !isLoginForm}
      <div class="auth-password auth-input-wrap">
        <div class="auth-label-wrap">
          <span class="auth-label-decoration"></span>
          <label class="auth-label" for="password">Confirm Password</label>
        </div>
        <input class="auth-input" type="password" required />
      </div>
    {/if}
    <div class="auth-submit-button-wrap">
      {#if isLoginForm}
        <button class="auth-submit-button" type="submit">Login</button>
      {:else}
        <button class="auth-submit-button" type="submit">Signin</button>
      {/if}
    </div>
  </form>
  <div class="auth-description">
    {#if isLoginForm}
      <a
        on:click|preventDefault={switchingAuthentication}
        class="auth-switch-way"
        href="home">Click here to create an account</a
      >
    {:else}
      <a
        on:click|preventDefault={switchingAuthentication}
        class="auth-switch-way"
        href="#">Already have an account?</a
      >
    {/if}
  </div>
</section>

<style>
  .auth {
    height: 100%;
    width: 350px;
    background-color: rgba(240, 248, 255, 0.527);
    border-radius: 8px;
    padding: 30px;
    margin: 50px 30px 0;
  }
  .auth-headline {
    font-size: 24px;
    color: #333;
    text-align: center;
    color: tomato;
  }
  .auth-form {
    padding: 0 50px;
  }
  .auth-input-wrap {
    display: flex;
    flex-direction: column;
    padding-top: 50px;
  }
  .auth-label-wrap {
    border-left: 5px solid tomato;
    margin-bottom: 8px;
  }
  .auth-label {
    color: #333;
    margin-left: 8px;
  }
  .auth-input {
    height: 25px;
    width: 100%;
    border-radius: 4px;
    border: 1px solid #333;
  }
  .auth-submit-button-wrap {
    text-align: center;
  }
  .auth-submit-button {
    height: 40px;
    width: 150px;
    margin: 30px;
    background-color: tomato;
    color: white;
    font-size: 18px;
    border-radius: 12px;
    border: none;
  }
</style>
