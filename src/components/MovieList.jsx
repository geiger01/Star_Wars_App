import React from 'react'
import { MoviePreview } from './MoviePreview'

export const MovieList = ({movies,onSetCurrMovie}) => {
    return (
        <div className="movie-list">
            <div className="movie-list-title">
                <h2>Our Movies</h2>
            </div>
            {movies && movies.map((movie)=> <MoviePreview movie={movie} key={movie.episode_id} onSetCurrMovie={onSetCurrMovie}/>)}
        </div>
    )
}
