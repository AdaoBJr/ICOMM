// store = Context API
import { createContext } from 'react';
import clothes from '../services/index';

// INITIAL STATES ----------------------------------------------------------------

export const SCREEN = {
  home: true,
  fav: false,
  carT: false,
};

export const PRODUCTS = {
  products: [...clothes],
  favorited: [],
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

// USER
export const ADD_PRODUCTS = 'ADD_PRODUCTS'; // ACTION -> ADD_PRODUCTS
export const addProducts = (allProducts, products) => ({ // ACTION-CREATOR -> ADD_PRODUCTS
  type: ADD_PRODUCTS, payload: { allProducts, products },
});

export const SET_FAVORITE = 'SET_FAVORITE'; // ACTION -> SET_FAVORITE
export const setFav = (favorited) => ({ // ACTION-CREATOR -> SET_FAVORITE
  type: SET_FAVORITE, payload: { favorited },
});

export const ADD_CART = 'ADD_CART'; // ACTION -> ADD_PRODUCTS
export const addCart = (cart) => ({ // ACTION-CREATOR -> ADD_PRODUCTS
  type: ADD_CART, payload: { cart },
});

export const ADD_TOTAL_CART = 'ADD_TOTAL_CART'; // ACTION -> ADD_TOTAL_CART
export const addTotalCart = (totalCart) => ({ // ACTION-CREATOR -> ADD_TOTAL_CART
  type: ADD_TOTAL_CART, payload: { totalCart },
});

export const SET_SCREEN_HOME = 'SET_SCREEN_HOME'; // ACTION -> SET_SCREEN_HOME
export const SET_SCREEN_FAV = 'SET_SCREEN_FAV'; // ACTION -> SET_SCREEN_FAV
export const SET_SCREEN_CART = 'SET_SCREEN_CART'; // ACTION -> SET_SCREEN_CART
