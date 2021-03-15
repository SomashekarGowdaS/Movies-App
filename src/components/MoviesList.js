import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import MovieCard from './MovieCard';

const MoviesList = (props) => {
    const movies = useSelector((state) => {
        return state.movies;
    });
    const [searchText, setSearchText] = useState('');
    const [orderBy, setOrderBy] = useState('');

    const handleSearch = (e) => {
        setSearchText(e.target.value);
    }

    const getMovies = () => {
        const selectedMovies = movies.filter(movie => {
            return movie.movieName.includes(searchText);
        });

        selectedMovies.sort((a, b) => {
            const nameA = a.movieName.toUpperCase();
            const nameB = b.movieName.toUpperCase();
            const rankA = +a.imdbRank;
            const rankB = +b.imdbRank;
            
            if(orderBy === "a-z") {
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }
                return 0;
            } else if(orderBy === "z-a") {
                if (nameA < nameB) {
                    return 1;
                }
                if (nameA > nameB) {
                    return -1;
                }
                return 0;
            } else if(orderBy === "1-100") {
                if(rankA < rankB) {
                    return -1;
                }
                if(rankA > rankB) {
                    return 1;
                }
                return 0;
            } else if(orderBy === "100-1") {
                if(rankA < rankB) {
                    return 1;
                }
                if(rankA > rankB) {
                    return -1;
                }
                return 0;
            }
        });

        return selectedMovies;
    }

    const handleChange = (e) => {
        setOrderBy(e.target.value);
    }

    return (
        <div>
            <input type="text" className="form-control" placeholder="Search by name..." value={ searchText } onChange={ handleSearch } />
            <select name="orderBy" className="form-select" value={ orderBy } onChange={ handleChange } >
                <option value="" disabled hidden > Order By </option>
                <option value="a-z" > A - Z </option>
                <option value="z-a" > Z -A </option>
                <option value="1-100" > 1 - 100 </option>
                <option value="100-1" > 100 -1 </option>
            </select>
            <div style={{maxHeight: '510px', overflow: 'auto'}} >
                { getMovies().map(movie => {
                    return <MovieCard key={movie.id} movie={movie} />
                }) }
            </div>
        </div>
    )
}

export default MoviesList