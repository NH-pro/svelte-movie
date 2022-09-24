<script>
    import { onMount } from "svelte";
    import { movieApiData, movieNames } from '../store.js';
    
    const movieKey = import.meta.env.VITE_TMDB_API_KEY

    onMount(async () => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${movieKey}&language=en-US&page=1`)
        .then(response => response.json())
        .then(data => {
            console.log(data.results)
            movieApiData.set(data.results)
        })
        .catch(error => {
            console.log(error)
            return [];
        });
    });
</script>

<main>
    <h1>Popular Movie Titles!</h1>
    <ul>
        {#each $movieNames as movieTitle}
            <img src={`https://www.themoviedb.org/t/p/original${movieTitle[1]}`} alt="movie_poster"/>
            <li>{movieTitle[0]}</li>
        {/each}
    </ul>
</main>

<style>
    img {
        width: 100px;
    }
</style>