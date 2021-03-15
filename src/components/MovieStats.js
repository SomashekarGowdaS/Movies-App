import React from 'react'
import { useSelector } from 'react-redux'

const MovieStats = (props) => {
    const movies = useSelector((state) => {
        return state.movies;
    });

    const getTopRankedMovie = () => {
        let top = movies[0];
        movies.forEach(movie => {
            if(movie.imdbRank < top.imdbRank) {
                top = movie
            }
        });
        return top;
    }

    return (
        <div className="mt-5 card text-center" >
            <h3> <em> Movie Stats </em> </h3>
            <div className="mt-4" >
                <h5> Total Movies - { movies.length } </h5>
                { movies.length !== 0 && <p> # { getTopRankedMovie().movieName } </p> }
            </div>
        </div>
    )
}

export default MovieStats