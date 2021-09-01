import React, { useReducer } from 'react';
import PropTypes from 'prop-types';

import store, { CART, PRODUCTS } from './store';
import cartReducer from './reducers/cart';
import productsReducer from './reducers/products';

export default function Provider({ children }) {
  const [products, setProducts] = useReducer(productsReducer, PRODUCTS);
  const [cart, setCart] = useReducer(cartReducer, CART);

  // CONTEXT
  const contextValue = {
    products,
    cart,
    setProducts,
    setCart,
  };

  // ----------------------------------------------------------------------------------------------

  return (
    <store.Provider value={contextValue}>
      { children }
    </store.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
