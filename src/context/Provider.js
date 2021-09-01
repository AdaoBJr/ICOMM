import React, { useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import store, {
  addCart,
  addTotalCart,
  CART, PRODUCTS, SCREEN, setFav, SET_SCREEN_CART, SET_SCREEN_FAV, SET_SCREEN_HOME,
} from './store';
import cartReducer from './reducers/cart';
import screenReducer from './reducers/screen';
import productsReducer from './reducers/products';
import { getStorage } from '../functions';

export default function Provider({ children }) {
  const { pathname } = useLocation();
  const [products, setProducts] = useReducer(productsReducer, PRODUCTS);
  const [screen, setScreen] = useReducer(screenReducer, SCREEN);
  const [cart, setCart] = useReducer(cartReducer, CART);

  // HOME ------------------------------------------------------------------------------------------
  const findLocation = () => {
    if (pathname === ('/favoritos')) { setScreen({ type: SET_SCREEN_FAV }); }
    if (pathname === ('/carrinho')) { setScreen({ type: SET_SCREEN_CART }); }
    if (pathname === ('/')) { setScreen({ type: SET_SCREEN_HOME }); }
  };

  // ----------------------------------------------------------------------------------------------
  // CICLOS DE VIDA
  useEffect(findLocation, [pathname]);
  useEffect(() => { setCart(addCart(getStorage('LScart'))); }, []);
  useEffect(() => { setCart(addTotalCart(getStorage('LScartSum'))); }, []);
  useEffect(() => {
    if (getStorage('LSfav').length) {
      setProducts(setFav(getStorage('LSfav')));
    }
  }, []);

  // ---------------------------------------------------------------------------------------------

  // CONTEXT
  const contextValue = {
    products,
    screen,
    cart,
    setProducts,
    setScreen,
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
