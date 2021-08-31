// store = Context API
import { createContext } from 'react';
import clothes from '../services';

// INITIAL STATES ----------------------------------------------------------------

export const SCREEN = {
  home: true,
  fav: false,
  carT: false,
};

export const PRODUCTS = {
  products: [...clothes],
};

export const CART = {
  cart: [],
  updateSum: true,
  totalCart: 0,
};

// COMBINE -----------------------------------------------------------------------

export const INITIAL_STATE = { ...SCREEN, ...PRODUCTS, ...CART };

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

export const ADD_TOTAL_CART = 'ADD_TOTAL_CART'; // ACTION -> ADD_TOTAL_CART
export const addTotalCart = (totalCart) => ({ // ACTION-CREATOR -> ADD_TOTAL_CART
  type: ADD_TOTAL_CART, payload: { totalCart },
});

// SCREEN
export const SET_SCREEN_HOME = 'SET_SCREEN_HOME'; // ACTION -> SET_SCREEN_HOME
export const SET_SCREEN_FAV = 'SET_SCREEN_FAV'; // ACTION -> SET_SCREEN_FAV
export const SET_SCREEN_CART = 'SET_SCREEN_CART'; // ACTION -> SET_SCREEN_CART
