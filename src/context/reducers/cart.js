import { ADD_CART } from '../store';

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
    default:
      return state;
  }
};

export default cartReducer;
