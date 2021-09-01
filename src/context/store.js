// store = Context API
import { createContext } from 'react';
import clothes from '../services';

// INITIAL STATES ----------------------------------------------------------------

export const PRODUCTS = {
  products: [...clothes],
};

export const CART = {
  cart: [],
};

// COMBINE -----------------------------------------------------------------------

export const INITIAL_STATE = { ...PRODUCTS, ...CART };

const store = createContext(INITIAL_STATE);

export default store;

// ACTIONS -----------------------------------------------------------------------

// PRODUCTS
export const SET_FAVORITE = 'SET_FAVORITE'; // ACTION -> SET_FAVORITE
export const setFav = (products) => ({ // ACTION-CREATOR -> SET_FAVORITE
  type: SET_FAVORITE, payload: { products },
});

// CART
export const ADD_CART = 'ADD_CART'; // ACTION -> ADD_PRODUCTS
export const addCart = (cart) => ({ // ACTION-CREATOR -> ADD_PRODUCTS
  type: ADD_CART, payload: { cart },
});
