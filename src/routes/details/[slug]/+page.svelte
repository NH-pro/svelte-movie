<script>
    import { page } from '$app/stores';
    import { movieApiData } from '../../../store.js';

    const selectedMovie = $movieApiData.filter(x => x.title.includes($page.params.slug))[0];
</script>


<main>
    <h1>Welcome to the details page for: {selectedMovie.title}</h1>
    <h2>{selectedMovie.overview}</h2>
</main>


<style>

</style>
