const initialMoviesState = [];

const moviesReducer = (state = initialMoviesState, action) => {
    switch(action.type) {
        case 'Add_Movie': {
            return [...state, action.payload];
        }
        case 'Delete_Movie': {
            return state.filter(movie => {
                return movie.id !== action.payload;
            });
        }

        default: {
            return state;
        }
    }
    
}

export default moviesReducer