import {
  ADD_PRODUCTS, SET_FAVORITE,
} from '../store';

const productsReducer = (state, { type, payload }) => { // Desestruturação do Action
  switch (type) {
    case ADD_PRODUCTS: {
      const { allProducts, products } = payload;
      return {
        ...state,
        allProducts,
        products,
      };
    }
    case SET_FAVORITE: {
      const { favorited } = payload;
      return {
        ...state,
        favorited,
      };
    }
    default:
      return state;
  }
};

export default productsReducer;
