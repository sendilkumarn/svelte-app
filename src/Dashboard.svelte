<script>
    import auth from './auth'

    const getName = () => auth.getName()
    const logout = () => auth.logout()
</script>

<div id="dashboard">
    <h2> Dashboard </h2>
    <aside> 
        <button on:click={logout}>
            Logout
        </button>
    </aside>
    <h2> This is restricted page and you can see it {getName()}</h2>
</div>