import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { FiShoppingCart } from 'react-icons/fi';

import logo from '../../files/images/logo.png';
import store from '../../context/store';
import { showQty } from '../../functions';

export default function Header() {
  const {
    products: { products },
    cart: { cart },
  } = useContext(store);

  const Qty = showQty(false, cart);

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
            >
              <Link to="/favoritos" className="navLink">
                {(products.some((product) => product.favorited)) ? <FaHeart className="navIcon" /> : <FaRegHeart className="navIcon" /> }
              </Link>
            </li>
            <li
              className="navItem"
              aria-hidden
            >
              <Link to="/carrinho" className="navLink">
                <FiShoppingCart className="navIcon" />
                {(Qty !== 0) && (
                  <div className={(Qty === 0) ? 'numCount' : 'numCount showNumCount'}>
                    {Qty}
                  </div>
                )}
              </Link>
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
