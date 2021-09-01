import React, { useContext, useEffect, useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import store, { addCart, setFav } from '../../context/store';
import { CarT, Fav } from '../../functions';

export default function ProductCard() {
  const {
    products: { products },
    cart: { cart },
    setProducts,
    setCart,
  } = useContext(store);

  const initialPage = {
    qtyPgs: 1,
    atualPg: 1,
    qtyPgsFloor: 1,
    initialProd: 0,
    limitProd: 4,
    cardsLimit: 4,
  };
  const initialPageMobile = {
    qtyPgs: 1,
    atualPg: 1,
    qtyPgsFloor: 1,
    initialProd: 0,
    limitProd: 1,
    cardsLimit: 1,
  };

  const [pages, setPages] = useState(initialPage);
  const [numPgs, setNumPgs] = useState([]);
  const [minWidth, setMinWidth] = useState(true);

  // CHECK WIDTH SCREEN ----------------------------------------------------------------------------

  const checkWidthScreen = () => {
    const MIN_WIDTH = 768;
    const screenWidth = window.screen.width;
    // const screenWidth = window.innerWidth;

    if (screenWidth >= MIN_WIDTH) {
      setMinWidth(true);
    } else {
      setMinWidth(false);
    }
  };

  const setLimits = () => {
    if (minWidth) {
      setPages(initialPage);
    } else {
      setPages(initialPageMobile);
    }
  };

  // CAROUSEL ----------------------------------------------------------------------------
  const qtyPages = () => {
    const { cardsLimit } = pages;

    const qtyPgsFull = products.length / cardsLimit;
    const qtyPgsFloor = Math.floor(qtyPgsFull);
    const qtyPgs = Math.ceil(qtyPgsFull);

    const NumPgs = [];
    for (let i = 1; i <= qtyPgs; i += 1) { NumPgs.push(i); }

    setPages({
      ...pages, qtyPgs, qtyPgsFloor,
    });
    setNumPgs(NumPgs);
  };

  const nextSlide = () => {
    const { limitProd, cardsLimit, atualPg } = pages;

    if (limitProd >= products.length - 1) {
      if (minWidth) {
        setPages({
          ...pages, initialProd: 0, limitProd: 4, atualPg: 1,
        });
      } else {
        setPages({
          ...pages, initialProd: 0, limitProd: 1, atualPg: 1,
        });
      }
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

  // RENDER PRODUCT CARD ---------------------------------------------------------------------------

  const classMsgProduct = (msg) => {
    if (msg === 'VERÃO 2022') { return 'msgSummer'; }
    if (msg === 'LANÇAMENTO') { return 'msgLaunch'; }
    if (msg === '20% OFF') { return 'msgOff'; }
    return '';
  };

  const renderProductCard = () => {
    const {
      initialProd, limitProd, atualPg,
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
              <div key={id} className="cardContent">
                <div className="topCard">
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
                <div className="buttonCard">
                  <button
                    type="button"
                    className="buyBtn"
                    onClick={() => setCart(addCart(CarT(product, cart)))}
                  >
                    COMPRAR
                  </button>
                </div>
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
  useEffect(setLimits, [minWidth]);
  useEffect(qtyPages, [pages.cardsLimit]);
  useEffect(checkWidthScreen, []);
  window.addEventListener('resize', () => checkWidthScreen());

  // ----------------------------------------------------------------------------------------------

  return (
    renderProductCard()
  );
}
