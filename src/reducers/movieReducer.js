import * as constants from '../actions/constants';

const initialState = {
    data: [],
    isLoading: false,
    error: null
};

const movieReducer = (state = initialState, action) => {
    switch(action.type) {
        case constants.MOVIE_LOAD_REQUEST: return {
            data: action.payload
        };
        case constants.MOVIE_LOAD_FAILED_FAILED: return {
            ...state,
            error: action.payload
        };
        case constants.MOVIE_LOAD_SUCCESS: return {
            data: [...state.data, action.payload]
        };
        default: return state;
    }
}

export default movieReducer;