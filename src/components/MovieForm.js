import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addMovie } from '../actions/moviesAction';

const MovieForm = (props) => {
    const [movieName, setMovieName] = useState('');
    const [imdbRank, setImdbRank] = useState('');
    const dispatch = useDispatch();

    const handleChange = (e) => {
        if(e.target.name === "movieName") {
            setMovieName(e.target.value);
        } else if(e.target.name === "imdbRank") {
            setImdbRank(e.target.value);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const movie = {
            id: Number(new Date()),
            movieName,
            imdbRank
        }
        dispatch(addMovie(movie));
        setMovieName('');
        setImdbRank('');
    }

    return (
        <div className="mt-5" >
            <h3> <em> Add Movie </em> </h3>
            <form onSubmit={ handleSubmit } className="mt-4" >
                <input type="text" className="form-control form-control-sm" placeholder="Movie Name" name="movieName" value={ movieName } onChange={ handleChange } /> <br />
                <input type="text" className="form-control form-control-sm" placeholder="IMDB Rank" name="imdbRank" value={ imdbRank } onChange={ handleChange } /> <br />
                <input type="submit" value="Add Movie" className="btn btn-primary" />
            </form>
        </div>
    )
}

export default MovieForm