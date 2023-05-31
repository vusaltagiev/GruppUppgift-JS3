import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './BannerArea.scss';
import 'bootstrap/dist/css/bootstrap.css';

const BannerArea = () => {
  const [backgroundImages, setBackgroundImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    axios.get('http://localhost:7000/api/products')
      .then(response => {
        const { data } = response;
        const extractedBackgroundImages = data.map(({ image }) => image);
        setBackgroundImages(extractedBackgroundImages);
      })
      .catch(error => console.log(error));
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % backgroundImages.length);
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, [backgroundImages]);

  return (
    <section className="banner-area">
      <div className="container-baner">
        <div className="row">
          <div className="col-lg-7 align-self-center">
            <div className="banner-inner">
              <h6>VÄLKOMMEN TILL BMERKETO SHOP</h6>
              <h1>Exklusiv Stol guld Samling.</h1>
              <Link className="btn-banner" to="/products">
                SHOPPA
              </Link>
            </div>
          </div>
          <div className="col-lg-5 d-none d-lg-block">
            <div className="slider-item" style={{ backgroundImage: `url(${backgroundImages[currentImageIndex]})` }}>
              <img src={backgroundImages[currentImageIndex]} alt="Banner" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerArea;
