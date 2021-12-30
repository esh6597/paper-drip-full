//REDUCER FOR ARTICLES
//  Instead of using a switch, we're now upgrading to slices to make
//  file structure more logical and intuitive. This also means
//  we no longer need action types nor creators in a separate file.
import { createSlice } from '@reduxjs/toolkit';
import { baseUrl } from '../shared/baseUrl';

export const articleSlice = createSlice({
    name: 'articleState',
    initialState: {
        isLoading: true,
        errMess: null,
        articles: []
    },
    //Redux toolkit also allows us to write mutating logic 
    //  instead of using pure functions due to immer library
    //  automatically creating a new state for us.
    reducers: {
        articlesLoading: (state) => {
            state.isLoading = true,
            state.errMess = null,
            state.articles = []
        },
        articlesFailed: (state, action) => {
            state.isLoading = false,
            state.errMess = action.payload,
            state.articles = []
        },
        addArticles: (state, action) => {
            state.isLoading = false;
            state.errMess = null;
            state.articles = action.payload;
        }
    }
});

//ACTIONS

//Export reducers as actions for non-thunked
export const { articlesLoading,
    articlesFailed,
    addArticles } = articleSlice.actions;

export const fetchArticles = () => dispatch => {
    dispatch(articlesLoading);

    return fetch(baseUrl + 'articles')
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                const error = new Error(`Error ${response.status}: ${response.statusText}`);
                error.response = response;
                throw error;
            }
        }, error => {
            const errMess = new Error(error.message);
            throw errMess;
        })
        .then(response => response.json())
        .then(articles => dispatch(addArticles(articles)))
        .catch(error => dispatch(articlesFailed(error.message)));
};

//For selecting just articles
export const selectArticleState = state => state.articleState;

export default articleSlice.reducer;


/* OLD ACTION CODE
export const fetchArticles = () => dispatch => {

    dispatch(articlesLoading);

    return fetch(baseUrl + 'articles')
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                const error = new Error(`Error ${response.status}: ${response.statusText}`);
                error.response = response;
                throw error;
            }
        }, error => {
            const errMess = new Error(error.message);
            throw errMess;
        })
        .then(response => response.json())
        .then(articles => dispatch(addArticles(articles)))
        .catch(error => dispatch(articlesFailed(error.message)));
};

export const articlesLoading = () => ({
    type: ActionTypes.ARTICLES_LOADING
});

export const addArticles = articles => ({
    type: ActionTypes.ADD_ARTICLES,
    payload: articles
});

export const articlesFailed = errMess => ({
    type: ActionTypes.ARTICLES_FAILED,
    payload: errMess
});
*/


/*OLD REDUCER CODE
import * as ActionTypes from './ActionTypes';

export const Articles = (state = {
    isLoading: true,
    errMess: null,
    articles: []
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_ARTICLES:
            return {...state, isLoading: false, errMess: null, articles: action.payload};
        case ActionTypes.ARTICLES_LOADING:
            return {...state, isLoading: true, errMess: null, articles: []};
        case ActionTypes.ARTICLES_FAILED:
            return {...state, isLoading: false, errMess: action.payload};
        default:
            return state;
    }
};
*/