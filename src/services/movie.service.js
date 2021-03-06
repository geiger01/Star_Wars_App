import axios from "axios";
import { storageService } from "./storage.service";

const URL = 'https://swapi.dev/api'
const MOVIE_KEY = 'movies'
const FAV_MOVIES_KEY = 'favourites'

export const movieService={
    getMovies,
    toggleFavMovie
}

async function getMovies(){

    const movies = storageService.loadFromStorage(MOVIE_KEY) || []
    if (movies && movies.length > 0 )return Promise.resolve(movies)

    try{
        const res= await axios.get(`${URL}/films`)
        const movies = res.data.results
        storageService.saveToStorage(MOVIE_KEY, movies)
        
        return movies
    }catch(err){
        console.log(err);
    }
}

function toggleFavMovie(episodeId){
    
    const favMovies = storageService.loadFromStorage(FAV_MOVIES_KEY) || {}

    if (favMovies[episodeId]){
        delete favMovies[episodeId]
    }else{
        favMovies[episodeId]= true
    }
    storageService.saveToStorage(FAV_MOVIES_KEY, favMovies)
    return favMovies
}