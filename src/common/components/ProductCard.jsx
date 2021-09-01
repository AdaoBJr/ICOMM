import React, { useContext, useEffect, useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import store, { addCart, setFav } from '../../context/store';
import { CarT, Fav } from '../../functions';

export default function ProductCard() {
  const initialPage = {
    qtyPgs: 1, numPgs: [], atualPg: 1, qtyPgsFloor: 1, initialProd: 0, limitProd: 4, cardsLimit: 4,
  };
  const [pages, setPages] = useState(initialPage);

  const {
    products: { products },
    cart: { cart },
    screen: { carT },
    setProducts,
    setCart,
  } = useContext(store);

  const qtyPages = () => {
    const { cardsLimit } = pages;
    const qtyPgsFull = products.length / cardsLimit;
    const qtyPgsFloor = Math.floor(qtyPgsFull);
    const qtyPgs = Math.ceil(qtyPgsFull);

    const numPgs = [];
    for (let i = 1; i <= qtyPgs; i += 1) { numPgs.push(i); }

    setPages({
      ...pages, qtyPgs, qtyPgsFloor, numPgs,
    });
  };

  const nextSlide = () => {
    const { limitProd, cardsLimit, atualPg } = pages;

    if (limitProd >= products.length - 1) {
      setPages({
        ...pages, initialProd: 0, limitProd: 4, atualPg: 1,
      });
    } else {
      setPages((prevState) => ({
        ...pages,
        initialProd: prevState.initialProd + cardsLimit,
        limitProd: prevState.limitProd + cardsLimit,
        atualPg: atualPg + 1,
      }));
    }
  };

  const prevSlide = () => {
    const {
      initialProd, cardsLimit, qtyPgs, atualPg,
    } = pages;

    if (initialProd === 0) {
      setPages({
        ...pages,
        initialProd: products.length - cardsLimit,
        limitProd: products.length,
        atualPg: qtyPgs,
      });
    } else {
      setPages((prevState) => ({
        ...pages,
        initialProd: prevState.initialProd - cardsLimit,
        limitProd: prevState.limitProd - cardsLimit,
        atualPg: atualPg - 1,
      }));
    }
  };

  const selectedPage = (numPg) => {
    const { cardsLimit } = pages;

    setPages({
      ...pages,
      initialProd: (numPg - 1) * cardsLimit,
      limitProd: numPg * cardsLimit,
      atualPg: numPg,
    });
  };

  const classMsgProduct = (msg) => {
    if (msg === 'VERÃO 2022') { return 'msgSummer'; }
    if (msg === 'LANÇAMENTO') { return 'msgLaunch'; }
    if (msg === '20% OFF') { return 'msgOff'; }
    return '';
  };

  const renderProductCard = () => {
    const {
      initialProd, limitProd, numPgs, atualPg,
    } = pages;
    const screenProducts = products.slice(initialProd, limitProd);
    return (
      <section>
        <div className="homeContainer">
          {screenProducts.map((product) => {
            const {
              id, msg, favorited, image, title, price, parcel,
            } = product;

            return (
              <div className="cardContent">
                <div key={id} className="topCard">
                  <p className={classMsgProduct(msg)}>{msg}</p>
                  <button
                    type="button"
                    className="favoritedBtn"
                    onClick={() => setProducts(setFav(Fav(products, id)))}
                  >
                    {(favorited) ? <FaHeart /> : <FaRegHeart /> }
                  </button>
                </div>
                <div className="middleCard">
                  <img src={image} alt="imagem do produto" className="imgCard" />
                  <h3 className="titleCard">{title}</h3>
                  <div className="priceCard">
                    {`R$ ${price
                      .toLocaleString('pt-br', { minimumFractionDigits: 2 })}`}
                  </div>
                  <p className="parcelCard">{parcel}</p>
                </div>
                {(!carT) ? (
                  <div className="buttonCard">
                    <button
                      type="button"
                      className="buyBtn"
                      onClick={() => setCart(addCart(CarT(product, cart)))}
                    >
                      COMPRAR
                    </button>
                  </div>
                ) : ''}
              </div>
            );
          })}
        </div>
        <div className="pageContent">
          <div className="arrowLeft"><MdKeyboardArrowLeft onClick={prevSlide} className="arrowPage" /></div>
          {numPgs.map((num) => (
            <div
              aria-hidden
              key={num}
              onClick={() => selectedPage(num)}
              className={(num === atualPg) ? 'numPage atualPg' : 'numPage'}
            >
              {num}
            </div>
          )) }
          <div className="arrowRight"><MdKeyboardArrowRight onClick={nextSlide} className="arrowPage" /></div>
        </div>
      </section>
    );
  };

  // ----------------------------------------------------------------------------------------------
  // CICLOS DE VIDA
  useEffect(qtyPages, [products]);

  // ----------------------------------------------------------------------------------------------

  return (
    renderProductCard()
  );
}
