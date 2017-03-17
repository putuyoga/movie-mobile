import * as constants from './constants';

// Should be changed if you want to point to new server
const apiUrl = 'http://192.168.0.113:3000';

export const loadMovies = () => {
    return (dispatch) => {
        dispatch({
            type: constants.MOVIE_LOAD_REQUEST,
            payload: []
        });
        fetch(apiUrl + '/movies')
        .then(response => response.json())
        .then(movies => dispatch({
            type: constants.MOVIE_LOAD_SUCCESS,
            payload: movies 
        }))
        .catch(error => dispatch({
            type: constants.MOVIE_LOAD_FAILED,
            payload: error
        }));
    }
}

export const viewMovieDetail = (movieId) => {
    return (dispatch) => {
        dispatch({
            type: constants.MOVIE_DETAIL_LOAD_REQUEST,
            payload: []
        });
        fetch(apiUrl + '/movies/' + movieId)
        .then(response => response.json())
        .then(movieDetailData => dispatch({
            type: constants.MOVIE_DETAIL_LOAD_SUCCESS,
            payload: movieDetailData
        }))
        .catch(error => dispatch({
            type: constants.MOVIE_DETAIL_LOAD_FAILED,
            payload: error
        }));
    }
}