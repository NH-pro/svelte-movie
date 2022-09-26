<script>
    import { page } from '$app/stores';
    import { movieApiData } from '../../../store.js';    
</script>


<main>
    <h1>Welcome to the details page for: {$page.params.slug}</h1>
    {#each $movieApiData as movie}
        {#if movie.title === $page.params.slug}
            <h2>{movie.overview}</h2>
        {/if}
    {/each}
</main>


<style>

</style>
