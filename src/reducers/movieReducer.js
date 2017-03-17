import * as constants from '../actions/constants';

const initialState = {
    data: [],
    currentDetail: null,
    isDetailLoading: false,
    isLoading: false,
    error: null
};

const movieReducer = (state = initialState, action) => {
    switch(action.type) {
        // primary movie list request
        case constants.MOVIE_LOAD_REQUEST: return {
            ...state,
            isLoading: true,
            error: false
        };
        case constants.MOVIE_LOAD_FAILED: return {
            ...state,
            isLoading: false,
            error: action.payload
        };
        case constants.MOVIE_LOAD_SUCCESS: return {
            ...state,
            isLoading: false,
            data: [...state.data, ...action.payload],
            error: false
        };

        // movie detail request
        case constants.MOVIE_DETAIL_LOAD_REQUEST: return {
            ...state,
            isDetailLoading: true,
            error: false
        };
        case constants.MOVIE_DETAIL_LOAD_FAILED: return {
            ...state,
            isDetailLoading: false,
            error: action.payload
        };
        case constants.MOVIE_DETAIL_LOAD_SUCCESS: return {
            ...state,
            isDetailLoading: false,
            currentDetail: action.payload,
            error: false
        };
        default: return state;
    }
}

export default movieReducer;