import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteMovie } from '../actions/moviesAction';
import img from '../assets/images/movie-beginning.png';

const MovieCard = (props) => {
    const { movie } = props;
    const dispatch = useDispatch();

    const handleDelete = () => {
        if(window.confirm('Are you sure to delete this movie ?')) {
            dispatch(deleteMovie(movie.id));
        }
    }

    return (
        <div className="card m-3 bg-secondary" style={{width: '18rem', display: 'inline-block'}} >
            
            <div className="card-body row" >
                <div className="col-6" >
                    <img src={ img } className="card-img-top" alt="Movie Cover" />
                </div>
                <div className="col-6" >
                    <h5 className="card-title"> { movie.movieName } </h5>
                    <p> # { movie.imdbRank } </p>
                    <i className="fa fa-trash ml-5" style={{color: 'red', fontSize: '20px'}} onClick={ handleDelete } ></i>
                </div>
            </div>
        </div>
    )
}

export default MovieCard