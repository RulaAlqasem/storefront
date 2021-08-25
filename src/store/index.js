
import { createStore, combineReducers, applyMiddleware } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';
import categoriesReducer from './categories.js';
import productsReducer from './products.js';
import cartReducer from './cart.js';
import thunk from 'redux-thunk';

const reducers = combineReducers({ products: productsReducer, categories: categoriesReducer, cart: cartReducer })

const store = () => {
  return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
}

export default store;