import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { FiShoppingCart } from 'react-icons/fi';

import logo from '../../files/images/logo.png';
import store, { addCart, setFav } from '../../context/store';
import { showQty } from '../../functions';

export default function Header() {
  const {
    products: { products },
    cart: { cart },
    setCart,
    setProducts,
  } = useContext(store);

  const Qty = showQty(false, cart);

  const clearFav = () => {
    const newProducts = [...products];
    for (let i = 0; i < newProducts.length; i += 1) {
      newProducts[i].favorited = false;
    }
    setProducts(setFav(newProducts));
  };

  const renderHeader = () => (
    <header className="header">
      <nav className="nav">
        <Link to="/" className="navLogo">
          <img src={logo} alt="logo" />
          <h2>MCX</h2>
        </Link>

        <div>
          <ul className="navList">
            <li
              className="navItem"
              aria-hidden
              onClick={clearFav}
            >
              <div className="navLink">
                {(products.some((product) => product.favorited)) ? <FaHeart className="navIcon" /> : <FaRegHeart className="navIcon" /> }
              </div>
            </li>
            <li
              className="navItem"
              aria-hidden
              onClick={() => setCart(addCart([]))}
            >
              <div className="navLink displayCart">
                <FiShoppingCart className="navIcon" style={{ marginBottom: '.8rem' }} />
                {(Qty !== 0) && (
                  <div className={(Qty === 0) ? 'numCount' : 'numCount showNumCount'}>
                    {Qty}
                  </div>
                )}
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
  return (
    renderHeader()
  );
}
