import React from 'react'
import { AiOutlineStar } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";

export const MoviePreview = ({movie,onSetCurrMovie,onToggleFav,favMovies}) => {
    return (
        <div onClick={()=>onSetCurrMovie(movie)} className="movie-preview">
            <h3>{movie.title} <span> ({movie.release_date.split('-')[0]})</span></h3>
            <div onClick={(e)=>onToggleFav(e,movie.episode_id)} className="movie-star">
            {favMovies[movie.episode_id] ? 
            <AiOutlineStar /> :
            <AiFillStar /> 
        }
            </div>
        </div>
    )
}
