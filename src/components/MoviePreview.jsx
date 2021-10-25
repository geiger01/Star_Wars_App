import React from 'react'

export const MoviePreview = ({movie,onSetCurrMovie}) => {
    return (
        <div onClick={()=>onSetCurrMovie(movie)} className="movie-preview">
            <h3>{movie.title} <span> ({movie.release_date.split('-')[0]})</span></h3>
        </div>
    )
}
