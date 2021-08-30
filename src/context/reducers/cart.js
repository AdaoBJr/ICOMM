import {
  ADD_CART, ADD_TOTAL_CART,
} from '../store';

const cartReducer = (state, { type, payload }) => { // Desestruturação do Action
  switch (type) {
    case ADD_CART: {
      const { cart } = payload;
      return {
        ...state,
        cart,
        updateSum: true,
      };
    }
    case ADD_TOTAL_CART: {
      const { totalCart } = payload;
      return {
        ...state,
        totalCart,
        updateSum: false,
      };
    }
    default:
      return state;
  }
};

export default cartReducer;
