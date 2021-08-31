import React from 'react';

import Header from '../components/Header';
import img5 from '../../files/images/image_5.png';
import img6 from '../../files/images/image_6.png';

export default function Home() {
  const renderHome = () => (
    <>
      {/* <!--========== HEADER ==========--> */}
      <Header />

      {/* <!--========== IMAGES ==========--> */}
      <div className="topImages">
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
      </div>

      {/* <!--========== CAROUSEL ==========--> */}
      <div className="homeContent">
        <h2 className="titleHome">DESTAQUES</h2>
      </div>
    </>
  );

  return (
    renderHome()
  );
}
