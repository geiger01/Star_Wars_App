import React ,{useState}from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { Screen } from './Screen';


export const MovieDetails = ({movie,onToggleNav}) => {


 
    if (!movie) return <div>Loading</div>
    return (
        <div className="movie-details">
            <div onClick={()=>onToggleNav(true)} className="menu-hamburger">
                <GiHamburgerMenu/>
            </div>

            <h1>{movie.title}</h1>
            <h4>Director: {movie.director}</h4>
            <h4>Producer: {movie.producer}</h4>
            <h4>Release Date: {movie.release_date.split('-')[0]}</h4>
            <p>{movie.opening_crawl}</p>
        <div className="movie-img"></div>

        </div>
    )
}
