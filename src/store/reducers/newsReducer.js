import {FETCH_NEWS_FAILURE, FETCH_NEWS_REQUEST, FETCH_NEWS_SUCCESS} from "../actions/actionTypes";

const initialState = {
    news: [],
    article: null,
    error: null,
    loading: false
};

const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_NEWS_REQUEST:
            return {
                ...state,
                loading: true
            };
        case FETCH_NEWS_SUCCESS:
            return {
                ...state,
                news: action.news,
                loading: false,
                error: null
            };
        case FETCH_NEWS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        default:
            return state;
    }
};

export default newsReducer;