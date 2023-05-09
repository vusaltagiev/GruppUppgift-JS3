import React from 'react'
import "./HeaderAreaElement.scss"

const HeaderAreaElement = () => {
  return (
    <div>
        <section className="banner-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 align-self-center">
                        <div className="banner-inner">
                            <h6>WELLCOME TO BMARKETO SHOP</h6>
                            <h1>Exclusive Chair gold Collection. </h1>
                            <a className="btn btn-black" href="product.html">SHOP NOW</a>
                        </div>
                    </div>
                    <div className="col-lg-5 d-none d-lg-block">
                        <div className="product-thumbnail-wrapper">
                            <div className="single-thumbnail-slider">
                                <div className="slider-item">
                                    <img src="assets/img/banner/1.png" alt="item"/>
                                </div>
                                <div className="slider-item">
                                    <img src="assets/img/banner/1.png" alt="item"/>
                                </div>
                                <div className="slider-item">
                                    <img src="assets/img/banner/1.png" alt="item"/>
                                </div>
                            </div>
                            <div className="product-thumbnail-carousel">
                                <div className="single-thumbnail-item">
                                    <img src="assets/img/banner/1s.png" alt="item"/>
                                </div>
                                <div className="single-thumbnail-item">
                                    <img src="assets/img/banner/2s.png" alt="item"/>
                                </div>
                                <div className="single-thumbnail-item">
                                    <img src="assets/img/banner/3s.png" alt="item"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </section>        
    </div>
  )
}

export default HeaderAreaElement;
