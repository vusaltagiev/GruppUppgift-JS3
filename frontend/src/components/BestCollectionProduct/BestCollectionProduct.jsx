import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import "./BestCollectionProduct.scss";

const BestCollectionProduct = (props) => {
  const { id, img, name, price } = props;

  return (
    <div className="gallery-item col-xl-3 col-lg-4 col-sm-6 cat-1 cat-3 cat-5 cat-7 cat-6">
      <div className="product-single-wrap">
        <div className="thumb">
          <Link to={`/details/${id}`}>
            <img src={img} alt="image" />
          </Link>
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
  );
};

export default BestCollectionProduct;
