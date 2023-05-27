import 'bootstrap/dist/css/bootstrap.min.css';
import './BestCollectionProduct.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'; 



const BestCollectionProduct = (props) => {
  return (
    <>
        <div className="gallery-sizer col-xl-5">
            <div className="gallery-item">
                    <div className="product-single-wrap">
                        <div className="thumb">
                            <img src={props.IMG} alt="image" />   
                        </div>
                        <div className="product-details">
                            <h6 className='product-name'><a href="product-details.html">{props.NAME}</a></h6>
                            <p className='product-price'>{props.PRICE}</p>
                            <a className="product-cart-btn" href="#"><FontAwesomeIcon icon={faCartPlus} /></a>
                        </div>
                    </div>   
            </div>   
        </div>   
    </> 
    )
};


export default BestCollectionProduct