<script>
    import { page } from '$app/stores';
    import { movieApiData } from '../../../store.js';

    const selectedMovie = $movieApiData.filter(x => x.title.includes($page.params.slug))[0];
</script>


<main>
    <div class="selected_movie_container">
        <h1>{selectedMovie.title}</h1>
        <div class="selected_movie_sidebox">
            <img class="movie_poster"  src={`https://www.themoviedb.org/t/p/original${selectedMovie.poster_path}`} alt="selected_movie_poster" />
            <h3>{selectedMovie.overview}</h3>
        </div>
    </div>
    <a href="../../">
        <button>
            back
        </button>
    </a>
</main>


<style>
    .selected_movie_container {
        display: flex;
        flex-direction: column;
        align-items: center;
        border: 5px solid black;
        border-radius: 10px;
        margin: 10px;
        padding: 10px;
    }

    .selected_movie_sidebox {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-items: center;
    }

   .movie_poster {
        width: 200px;
        height: 270px;
        margin: 10px;
    }

    h3 {
        margin: 10px;
    }

    button:hover {
        cursor: pointer;
    }
</style>
