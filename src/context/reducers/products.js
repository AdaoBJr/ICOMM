import {
  SET_FAVORITE,
} from '../store';

const productsReducer = (state, { type, payload }) => { // Desestruturação do Action
  switch (type) {
    case SET_FAVORITE: {
      const { products } = payload;
      return {
        ...state,
        products,
      };
    }
    default:
      return state;
  }
};

export default productsReducer;
