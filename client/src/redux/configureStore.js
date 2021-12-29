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

//Combine
const rootReducer = combineReducers({
  articles: Articles,
  items: Items,
  comments: Comments,
  reviews: Reviews,
  cart: Cart
});

function ConfigureStore() {
  const store = createStore(
    rootReducer,
    applyMiddleware(thunk, logger)
  );

  return store;
}

export default ConfigureStore;