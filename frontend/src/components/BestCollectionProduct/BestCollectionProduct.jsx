import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

const BestCollectionProduct = (props) => {
  const { id, img, name, price } = props;

  return (
    <div className="gallery-sizer col-xl-5">
      <div className="gallery-item">
        <div className="product-single-wrap">
          <div className="thumb">
            <img src={img} alt="image" />
          </div>
          <div className="product-details">
            <h6 className="product-name">
              <Link to={`/details/${id}`}>{name}</Link>
            </h6>
            <p className="product-price">{price}</p>
            <Link to={`/details/${id}`} className="product-cart-btn">
              <FontAwesomeIcon icon={faCartPlus} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestCollectionProduct;

