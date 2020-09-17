import {
    EDIT_ARTICLE_SUCCESS,
    FETCH_NEWS_FAILURE,
    FETCH_NEWS_REQUEST,
    FETCH_NEWS_SUCCESS
} from "./actionTypes";
import axiosApi from "../../axiosApi";

export const fetchNewsSuccess = news => ({type: FETCH_NEWS_SUCCESS, news});
export const editArticleSuccess = (id, newArticle) => ({type: EDIT_ARTICLE_SUCCESS, id, newArticle});
export const fetchNewsFailure = error => ({type: FETCH_NEWS_FAILURE, error});
export const fetchNewsRequest = () => ({type: FETCH_NEWS_REQUEST});

export const fetchNews = () => {
    return async dispatch => {
        try {
            dispatch(fetchNewsRequest());
            const response = await axiosApi.get('/news.json');
            const news = response.data;
            dispatch(fetchNewsSuccess(news));
        } catch (e) {
            fetchNewsFailure(e);
        }
    }
};

export const postArticle = article => {
    return async dispatch => {
        try {
            dispatch(fetchNewsRequest());
            await axiosApi.post('/news.json', article);
            const response = await axiosApi.get('/news.json');
            const news = response.data;
            dispatch(fetchNewsSuccess(news));
        } catch (e) {
            dispatch(fetchNewsFailure(e));
        }
    }
};

export const deleteArticle = article => {
    return async dispatch => {
        try {
            dispatch(fetchNewsRequest());
            await axiosApi.delete('/news/' + article + '.json');
            const response = await axiosApi.get('/news.json');
            const news = response.data;
            dispatch(fetchNewsSuccess(news));
        } catch (e) {
            dispatch(fetchNewsFailure(e));
        }
    }
};

export const editArticle = (article, newArticle) => {
    return async dispatch => {
        try {
            dispatch(fetchNewsRequest());
            await axiosApi.put('/news/' + article + '.json', newArticle);
            dispatch(editArticleSuccess(article, newArticle));
        } catch (e) {
            dispatch(fetchNewsFailure(e));
        }
    }
}