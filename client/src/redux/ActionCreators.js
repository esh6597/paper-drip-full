import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

// BLOG ARTICLES

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

//STORE ITEMS

export const fetchItems = () => dispatch => {

    dispatch(itemsLoading);

    return fetch(baseUrl + 'items')
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
        .then(articles => dispatch(addItems(articles)))
        .catch(error => dispatch(itemsFailed(error.message)));
};

export const itemsLoading = () => ({
    type: ActionTypes.ITEMS_LOADING
});

export const addItems = items => ({
    type: ActionTypes.ADD_ITEMS,
    payload: items
});

export const itemsFailed = errMess => ({
    type: ActionTypes.ITEMS_FAILED,
    payload: errMess
});

//Item Reviews

export const fetchReviews = () => dispatch => {
    
    dispatch(reviewsLoading());

    return fetch(baseUrl + 'reviews')
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
        .then(reviews => dispatch(addReviews(reviews)))
        .catch(error => dispatch(reviewsFailed(error.message)));
};

export const reviewsLoading = () => ({
    type: ActionTypes.REVIEWS_LOADING
});

export const reviewsFailed = errMess => ({
    type: ActionTypes.REVIEWS_FAILED,
    payload: errMess
});

export const addReviews = reviews => ({
    type: ActionTypes.ADD_REVIEWS,
    payload: reviews
});

//Article comments

export const fetchComments = () => dispatch => {
    
    dispatch(commentsLoading());

    return fetch(baseUrl + 'comments')
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
        .then(comments => dispatch(addComments(comments)))
        .catch(error => dispatch(commentsFailed(error.message)));
};

export const commentsLoading = () => ({
    type: ActionTypes.COMMENTS_LOADING
});

export const commentsFailed = errMess => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errMess
});

export const addComments = comments => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});

export const updateComments = newComment => ({
    type: ActionTypes.UPDATE_COMMENTS,
    payload: newComment
});

export const postComment = (articleId, author, summary) => dispatch => {
    const newComment = {
        articleId: articleId,
        likes: 0,
        dislikes: 0,
        author: author,
        date: null,
        summary: summary
    };

    newComment.date = new Date().toJSON();

    return fetch(baseUrl + 'comments', {
        method: "POST",
        body: JSON.stringify(newComment),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(response => {
        if (response.ok) {
            return response;
        } else {
            const error = new Error(`Error ${response.status}: ${response.statusText}`);
            error.response = response;
            throw error;
        }
    }, error => {
        throw error;
    })
    .then(response => response.json())
    .then(response => dispatch(updateComments(response)))
    .catch(error => {
        console.log('From postComment(): ', error.message);
        alert("Sorry, your action couldn't be posted.\nError: " + error.message);
    });
};

//Cart

export const updateCart = (itemId, quantity) => ({
    type: ActionTypes.UPDATE_CART,
    itemId: itemId,
    quantity: quantity
});

export const removeCartItem = itemId => ({
    type: ActionTypes.REMOVE_CART_ITEM,
    itemId: itemId
});

export const emptyCart = () => ({
    type: ActionTypes.EMPTY_CART
});