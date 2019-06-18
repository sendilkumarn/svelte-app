<script>
    import Login from  './Login.svelte'
    import Dashboard from  './Dashboard.svelte'

    import { onMount } from 'svelte'

    import auth from './auth'
    let loggedIn = false

    onMount(() => {        
        auth.onChange = lg => {
            loggedIn = lg
        }
    });

</script>

<h1>Welcome to Svelte world!!!</h1>
{#if loggedIn}
    <Dashboard />
{:else}
    <Login />
{/if}

