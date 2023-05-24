import React from 'react'
import './DiscountedProducts.scss'
import "bootstrap/dist/css/bootstrap.min.css";



const DiscountedProducts = () => {
  return (
    <>
        <div className="discount-product-area bg-pink pd-top-80 pd-bottom-50">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-4 col-sm-6">
                    <div className="single-discount-wrap">
                        <div className="thumb">
                            <img src="assets/img/discount/1.png" alt="img" />
                        </div>
                        <div className="wrap-details">
                            <h6><a href="#">Woman White Dress</a></h6>
                            <p><del>$50.00</del>$30.00</p>
                            <a className="product-cart-btn" href="#"><img src="assets/img/icon/cart.png" alt="img" /></a>
                        </div>
                        <div className="hover-wrap-details text-center">
                            <h6>UP TO SELL</h6>
                            <h2>50% OFF</h2>
                            <h4>Get The Best Price</h4>
                            <p>Get the best daily offer et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren no sea taki</p>
                            <a href="#">Discover More</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                    <div className="single-discount-wrap">
                        <div className="thumb">
                            <img src="assets/img/discount/3.png" alt="img" />
                        </div>
                        <div className="wrap-details">
                            <h6><a href="#">Table Lampe - scele tempore</a></h6>
                            <p><del>$50.00</del>$30.00</p>
                            <a className="product-cart-btn" href="#"><img src="assets/img/icon/cart.png" alt="img" /></a>
                        </div>
                        <div className="hover-wrap-details text-center">
                            <h6>UP TO SELL</h6>
                            <h2>50% OFF</h2>
                            <h4>Get The Best Price</h4>
                            <p>Get the best daily offer et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren no sea taki</p>
                            <a href="#">Discover More</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                    <div className="single-discount-wrap">
                        <div className="thumb">
                            <img src="assets/img/discount/2.png" alt="img" />
                        </div>
                        <div className="wrap-details">
                            <h6><a href="#">Shirt clothing sleeve skirt</a></h6>
                            <p><del>$50.00</del>$30.00</p>
                            <a className="product-cart-btn" href="#"><img src="assets/img/icon/cart.png" alt="img" /></a>
                        </div>
                        <div className="hover-wrap-details text-center">
                            <h6>UP TO SELL</h6>
                            <h2>50% OFF</h2>
                            <h4>Get The Best Price</h4>
                            <p>Get the best daily offer et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren no sea taki</p>
                            <a href="#">Discover More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> 
    </>
  )
}

export default DiscountedProducts