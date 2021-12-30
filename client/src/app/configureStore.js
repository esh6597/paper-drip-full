//Dependencies
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

//Reducers
import { Articles } from './articles';
import { Items } from './items';
import { Comments } from './comments';
import { Reviews } from './reviews';
import { Cart } from './cart';

//Automatically applies thunk
const Store = configureStore({
  reducer: {
    articles: Articles,
    items: Items,
    comments: Comments,
    reviews: Reviews,
    cart: Cart
  }
});

/*
function ConfigureStore() {
  const store = createStore(
    rootReducer,
    applyMiddleware(thunk, logger)
  );

  return store;
}
*/

export default Store;