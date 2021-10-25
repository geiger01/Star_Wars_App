import React,{useState,useEffect} from 'react'
import { MovieDetails } from '../components/MovieDetails'
import { MovieList } from '../components/MovieList'
import { Screen } from '../components/Screen'
import { movieService } from '../services/movie.service'
import { storageService } from '../services/storage.service'

export const MovieApp = () => {

   const [movies, setMovies] = useState([])
   const [currMovie, setCurrMovie] = useState(null)
   const [favMovies, setFavMovies] = useState(null)
   const [isNavOpen, setIsNavOpen] = useState(false)


   useEffect(() => {
       const loadMovies=async ()=>{
            const movies = await movieService.getMovies()
            setMovies(movies)
            setCurrMovie(movies[0])
            setFavMovies(storageService.loadFromStorage('favourites') || {})
    }
    loadMovies()

   }, [])

   const onSetCurrMovie=(movie)=>{
        setCurrMovie(movie)
        onToggleNav(false)
   }

   const onToggleFav=(e,episodeId)=>{
    e.stopPropagation()
    const favMovies=movieService.toggleFavMovie(episodeId)
    setFavMovies(favMovies)
   }

   const onToggleNav=(boolean)=>{
    setIsNavOpen(boolean)
}

    return (
        <main className="movie-app">
            <div className="movie-content-container">
               
                <MovieList isNavOpen={isNavOpen} onToggleFav={onToggleFav} movies={movies} onSetCurrMovie={onSetCurrMovie} favMovies={favMovies}/>
                <MovieDetails movie={currMovie} onToggleNav={onToggleNav} />
            </div>

        <Screen exitScreen={setIsNavOpen} isOpen={isNavOpen}/>

        </main>
    )
}
