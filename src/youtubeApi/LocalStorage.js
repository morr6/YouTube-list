export const init = () => {
    const movies = getMovies()
    const initArray = []

    if (!movies) {
        window.localStorage.setItem('movies', JSON.stringify(initArray))
    }
}

export const addMovie = (movie) => {
    const movies = getMovies()

    const newMovies = [...movies, {id: movie, favorite: false}]

    window.localStorage.setItem('movies', JSON.stringify(newMovies))
}

export const getMovies = () => {
    const movies = window.localStorage.getItem('movies')
    try {
        return JSON.parse(movies);
    } catch (err) {
        return movies;
    }    
}

export const deleteMovie = (movieId) => {
    const movies = getMovies()
    console.log(movies,movieId)    

    if (movies) {
        const newMovies = movies.filter( movie => movie.id !== movieId)
        window.localStorage.setItem('movies', JSON.stringify(newMovies))
        
    }
}

export const deleteAllMovies = () => {
    const emptyArray = []
    window.localStorage.setItem('movies', JSON.stringify(emptyArray))
}
     
export const addToFavorite = (movieId) => {
    const movies = getMovies()

    const newMovies = movies.map( movie => 
        movie.id === movieId ? ({...movie, favorite: !movie.favorite}) : movie
    )
    
    window.localStorage.setItem('movies', JSON.stringify(newMovies))
}