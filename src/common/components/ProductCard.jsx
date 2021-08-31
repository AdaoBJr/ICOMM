import React, { useContext } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import store, { addCart, setFav } from '../../context/store';
import { CarT, Fav } from '../../functions';

export default function ProductCard() {
  const {
    products: { products },
    cart: { cart },
    screen: { carT },
    setProducts,
    setCart,
  } = useContext(store);

  const renderProductCard = () => (
    products.map((product) => {
      const {
        id, msg, favorited, image, title, price, parcel,
      } = product;

      return (
        <section key={id} className="cardContent">
          <div className="topCard">
            <p>{msg}</p>
            <button
              type="button"
              className="favoritedBtn"
              onClick={() => setProducts(setFav(Fav(products, id)))}
            >
              {(favorited) ? <FaHeart /> : <FaRegHeart /> }
            </button>
          </div>
          <div className="middleCard">
            <img src={image} alt="imagem do produto" />
            <h3 className="titleCard">{title}</h3>
            <div className="priceCard">
              {`R$ ${price
                .toLocaleString('pt-br', { minimumFractionDigits: 2 })}`}
            </div>
            <p className="parcelCard">{parcel}</p>
          </div>
          {(!carT) ? (
            <div className="bottomCard">
              <button
                type="button"
                className="buyBtn"
                onClick={() => setCart(addCart(CarT(product, cart)))}
              >
                COMPRAR
              </button>
            </div>
          ) : ''}
        </section>
      );
    })
  );

  return (
    renderProductCard()
  );
}
