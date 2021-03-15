
export const addMovie = (movie) => {
    return {
        type: 'Add_Movie',
        payload: movie
    }
}

export const deleteMovie = (id) => {
    return {
        type: 'Delete_Movie',
        payload: id
    }
}