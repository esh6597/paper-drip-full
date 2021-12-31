//REDUCER FOR ITEM REVIEWS

import { createSlice } from '@reduxjs/toolkit';
import { baseUrl } from '../shared/baseUrl';

export const reviewSlice = createSlice({
    name: 'reviewState',
    initialState: {
        isLoading: true,
        errMess: null,
        reviews: []
    },
    //Redux toolkit also allows us to write mutating logic 
    //  instead of using pure functions due to immer library
    //  automatically creating a new state for us.
    reducers: {
        reviewsLoading: (state) => {
            state.isLoading = true,
            state.errMess = null,
            state.reviews = []
        },
        reviewsFailed: (state, action) => {
            state.isLoading = false,
            state.errMess = action.payload,
            state.reviews = []
        },
        //Passes checks; render reviews
        addReviews: (state, action) => {
            state.isLoading = false;
            state.errMess = null;
            state.reviews = action.payload;
        }
    }
});

//ACTIONS

//Export reducers as actions for non-thunked
export const { reviewsLoading,
    reviewsFailed,
    addReviews } = reviewSlice.actions;

export const fetchReviews = () => dispatch => {
    dispatch(reviewsLoading);

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

//For selecting just reviews
export const selectReviewState = state => state.reviewState;

export default reviewSlice.reducer;

//OLD REDUCER CODE
/*
import * as ActionTypes from './ActionTypes';

export const Reviews = (state = {
    isLoading: true,
    errMess: null,
    reviews: []
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_REVIEWS:
            return {...state, isLoading: false, errMess: null, reviews: action.payload};
        case ActionTypes.REVIEWS_LOADING:
            return {...state, isLoading: true, errMess: null, reviews: []};
        case ActionTypes.REVIEWS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};
        default:
            return state;
    }
};
*/