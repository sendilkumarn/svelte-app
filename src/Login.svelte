<script>
import auth from './auth'

let error = false
let email = ""
let pass = ""

const login = () => {
    auth.login(email, pass, loggedIn => {
        if(!loggedIn) {
            error = true
        }
    })
}
</script>

<style>
  .error {
    color: red;
  }
</style>

<div>
    <h2> Login </h2>
    <form on:submit|preventDefault={login}>
        <label> <input placeholder="email" bind:value={email} id="email"> </label>
        <label> <input placeholder="password" type="password" bind:value={pass} id="pass"> </label>
        <button type="submit" id="submit">login</button>

        {#if error}
        <p class="error">Bad login information</p>
        {/if}
    </form>

</div>