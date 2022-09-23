import { writable, derived } from "svelte/store";

export const movieApiData = writable([]);

export const movieNames = derived(movieApiData, ($movieApiData) => {
    if ($movieApiData) {
        return $movieApiData.map(movie => movie.title);
    }
    return [];
});