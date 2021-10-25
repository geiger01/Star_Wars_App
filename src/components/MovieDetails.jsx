import React from 'react'

export const MovieDetails = ({movie, onToggleFav}) => {


    if (!movie) return <div>Loading</div>
    return (
        <div className="movie-details">

            <h1>{movie.title}</h1>
            <h4>Director: {movie.director}</h4>
            <h4>Producer: {movie.producer}</h4>
            <h4>Release Date: {movie.release_date.split('-')[0]}</h4>
        <div className="movie-img"></div>

        </div>
    )
}
