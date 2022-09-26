<script>
    import { onMount } from "svelte";
    import { movieApiData } from '../store.js';
    
    const movieKey = import.meta.env.VITE_TMDB_API_KEY

    if($movieApiData.length === 0) {
        onMount(async () => {
            fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${movieKey}&language=en-US&page=1`)
            .then(response => response.json())
            .then(data => {
                console.log(data.results);
                movieApiData.set(data.results);
            })
            .catch(error => {
                console.log(error);
                return [];
            });
        });
    }

</script>

<main>
    <header>
        <h1>Svelte Movie Theatre</h1>
        <div class="header_att">
            <h3>Movie data attributed to:</h3>
            <img class="tmdb_attribution" src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_2-9665a76b1ae401a510ec1e0ca40ddcb3b0cfe45f1d51b77a308fea0845885648.svg" alt="tmdb_attribution"/>
        </div>
    </header>

    <div class="movie_box">
        {#each $movieApiData as movie}
            <a class="movie_container" href={`../details/${movie.title}`}>
                <img class="movie_poster" src={`https://www.themoviedb.org/t/p/original${movie.poster_path}`} alt="movie_poster"/>
                <h3 class="movie_title" >{movie.title}</h3>
            </a>
        {/each}
    </div>

</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    header {
        display: flex;
        flex-direction: row;
        align-items: center;
        background-color: aquamarine;
        width: 100%;
        margin: 20px;
        justify-content: center;
    }

    .header_att {
        margin-left: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .tmdb_attribution {
        width: 200px;
        margin-bottom: 30px;
    }

    .movie_box {
        display: flex;
        flex-wrap: wrap;
        align-content: center;
        justify-content: center;
    }

    .movie_container {
        padding: 5px;
        margin: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 150px;
        height: 250px;
        border: 2px solid black;
        border-radius: 5px;
    }
    .movie_container:hover {
        box-shadow: 3px 3px black;
        cursor: pointer;
    }

    .movie_poster {
        width: 110px;
        height: 170px;
        margin: 10px;
    }
    .movie_poster:hover {
        box-shadow: 0px 0px black;
    }
    
    .movie_title {
        margin: 0 0;
        text-align: center;
    }
    .movie_title:hover {
        box-shadow: 0px 0px black;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

</style>