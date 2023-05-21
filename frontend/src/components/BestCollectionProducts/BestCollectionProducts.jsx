import './BestCollectionProducts.scss'
import "bootstrap/dist/css/bootstrap.min.css";
import BestCollectionImg from "../../images/placeholders/270x295.svg";

const BestCollectionProducts = () => {
  return (
    <>
       
            <div className="gallery-section">
                <div className="gallery-isotope row">
                    <div className="gallery-sizer col-1"></div>
                    
                    <div className="gallery-item col-xl-3 col-lg-4 col-sm-6 cat-1 cat-3 cat-5 cat-7 cat-6">
                    <div className="product-single-wrap">
                        <div className="thumb">
                        <img src={BestCollectionImg} alt="image" />   
                        </div>
                        <div className="product-details">
                        <h6><a href="product-details.html">Apple watch series</a></h6>
                        <p>$30.00</p>
                        <a className="product-cart-btn" href="#"><img src="assets/img/icon/cart.png" alt="img" /></a>
                        </div>
                    </div>
                    </div>
                    

                </div>
            </div>
            <div className="gallery-section">
                <div className="gallery-isotope row">
                    <div className="gallery-sizer col-1"></div>
                    
                    <div className="gallery-item col-xl-3 col-lg-4 col-sm-6 cat-1 cat-3 cat-5 cat-7 cat-6">
                    <div className="product-single-wrap">
                        <div className="thumb">
                        <img src={BestCollectionImg} alt="image" />   
                        </div>
                        <div className="product-details">
                        <h6><a href="product-details.html">Apple watch series</a></h6>
                        <p>$30.00</p>
                        <a className="product-cart-btn" href="#"><img src="assets/img/icon/cart.png" alt="img" /></a>
                        </div>
                    </div>
                    </div>
                    

                </div>
            </div>

        </>
    )
};


export default BestCollectionProducts