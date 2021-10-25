import React,{useState,useEffect} from 'react'
import { MovieDetails } from '../components/MovieDetails'
import { MovieList } from '../components/MovieList'
import { movieService } from '../services/movie.service'

export const MovieApp = () => {

   const [movies, setMovies] = useState([])
   const [currMovie, setCurrMovie] = useState(null)

   useEffect(() => {
       const loadMovies=async ()=>{
            const movies = await movieService.getMovies()
            setMovies(movies)
    }
    loadMovies()

   }, [])

   const onSetCurrMovie=(movie)=>{
        console.log(movie);
        setCurrMovie(movie)
   }

   const onToggleFav=()=>{

   }

    return (
        <main className="movie-app">
            <div className="movie-content-container">
                <MovieList movies={movies} onSetCurrMovie={onSetCurrMovie}/>
                <MovieDetails movie={currMovie} onToggleFav={onToggleFav}/>
            </div>
        </main>
    )
}
