//Dependencies
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

//Reducers
import { Articles } from './articles';
import { Items } from './items';
import { Comments } from './comments';
import { Reviews } from './reviews';
import { Cart } from './cart';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            articles: Articles,
            items: Items,
            comments: Comments,
            reviews: Reviews,
            cart: Cart
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}