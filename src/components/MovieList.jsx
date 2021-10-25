import React from 'react'
import { MoviePreview } from './MoviePreview'

export const MovieList = ({movies,onSetCurrMovie,onToggleFav,favMovies,isNavOpen}) => {
    return (
        <div className={`movie-list ${isNavOpen ? "active" : ""} `}>
            <div className="movie-list-title">
                <h2>Our Movies</h2>
            </div>
            {movies && movies.map((movie)=> <MoviePreview onToggleFav={onToggleFav} movie={movie} key={movie.episode_id} onSetCurrMovie={onSetCurrMovie} favMovies={favMovies}/>)}
        </div>
    )
}
