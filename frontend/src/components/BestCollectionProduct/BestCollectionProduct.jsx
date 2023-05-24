import './BestCollectionProduct.scss'
import 'bootstrap/dist/css/bootstrap.min.css';


const BestCollectionProduct = (props) => {
  return (
    <>
            <div className="gallery-section">
                <div className="gallery-isotope row">
                    <div className="gallery-sizer col-2"></div>
                        <div className="gallery-item col-xl-2">
                            <div className="product-single-wrap">
                            <div className="thumb">
                                <img src={props.IMG} alt="image" />   
                            </div>
                            <div className="product-details">
                                <h6 className='product-name'><a href="product-details.html">{props.NAME}</a></h6>
                                <p className='product-price'>{props.PRICE}</p>
                                <a className="product-cart-btn" href="#"><img src="assets/img/icon/cart.png" alt="img" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </> 
    )
};


export default BestCollectionProduct