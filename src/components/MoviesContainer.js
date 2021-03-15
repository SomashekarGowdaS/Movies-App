import React from 'react'
import { useSelector } from 'react-redux'
import MovieForm from './MovieForm';
import MoviesList from './MoviesList';
import MovieStats from './MovieStats';

const MoviesContainer = (props) => {
    const movies = useSelector((state) => {
        return state.movies;
    });
    console.log(movies);

    return (
        <div className="row mt-3" >
            <div className="col-7" >
                <h1 className="mb-4" > <em> My Big Movie List </em> </h1>
                <MoviesList />
            </div>
            <div className="col-5" >
                <MovieForm />
                <MovieStats />
            </div>
        </div>
    )
}

export default MoviesContainer