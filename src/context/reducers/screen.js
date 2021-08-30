import {
  SET_SCREEN_HOME, SET_SCREEN_FAV, SET_SCREEN_CART,
} from '../store';

const screenReducer = (state, action) => { // Desestruturação do Action
  switch (action.type) {
    case SET_SCREEN_HOME: {
      return {
        ...state,
        home: true,
        colec: false,
        fav: false,
        carT: false,
      };
    }
    case SET_SCREEN_FAV: {
      return {
        ...state,
        home: false,
        colec: false,
        fav: true,
        carT: false,
      };
    }
    case SET_SCREEN_CART: {
      return {
        ...state,
        home: false,
        colec: false,
        fav: false,
        carT: true,
      };
    }
    default:
      return state;
  }
};

export default screenReducer;
