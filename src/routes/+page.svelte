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
    <div class="movie_box">
        {#each $movieNames as movieTitle}
            <div class="movie_container">
                <h3>{movieTitle[0]}</h3>
                <img src={`https://www.themoviedb.org/t/p/original${movieTitle[1]}`} alt="movie_poster"/>
                <img class="tmdb_attribution" src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_2-9665a76b1ae401a510ec1e0ca40ddcb3b0cfe45f1d51b77a308fea0845885648.svg" alt="tmdb_attribution"/>
            </div>
        {/each}
    </div>

</main>

<style>
    .tmdb_attribution {
        width: 100px;
        margin: 10px;
    }

    .movie_box {
        display: flex;
        flex-wrap: wrap;
        align-content: center;
        justify-content: center;
    }

    .movie_container {
        padding: 5px;
        margin: 5px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 150px;
        height: 275px;
        border: 2px solid black;
        border-radius: 5px;
    }

    img {
        width: 100px;
    }
</style>