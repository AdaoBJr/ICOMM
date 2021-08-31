import React from 'react';

import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import img5 from '../../files/images/image_5.png';
import img6 from '../../files/images/image_6.png';

export default function Home() {
  const renderHome = () => (
    <main>
      {/* <!--========== HEADER ==========--> */}
      <Header />

      {/* <!--========== IMAGES ==========--> */}
      <section className="topImages">
        <div>
          <p className="titleTopImg">
            ÍRIS
            <br />
            VERÃO
            <br />
            2022
          </p>
          <img src={img5} alt="imagem destaque 1" />
        </div>
        <div>
          <p className="titleTopImg">
            <br />
            LE LIS
            <br />
            BLANC
          </p>
          <img src={img6} alt="imagem destaque 2" />
        </div>
      </section>

      {/* <!--========== CAROUSEL ==========--> */}
      <section className="homeContent">
        <h2 className="titleHome">DESTAQUES</h2>
        <ProductCard />
      </section>
    </main>
  );

  return (
    renderHome()
  );
}
