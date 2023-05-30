import React, { useEffect, useState } from 'react';
import axios from 'axios';
import HoverWrapDetails from '../HoverWrapDetails/HoverWrapDetails';
import './DiscountedProducts.scss';

const DiscountedProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:7000/api/products')
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="discount-product-area bg-pink-100 pt-5 pb-4">
      <div className="container">
        <div className="row justify-content-center">
          {products.slice(0, 3).map((product, index) => (
            <div key={product.id+product.name} className="col-lg-4 col-md-6">
              {index === 1 ? (
                <HoverWrapDetails />
              ) : (
                <div className="single-discount-wrap card p-3">
                  <div className="thumb card-img-top">
                    <img src={product.image} alt="img" />
                  </div>
                  <div className="wrap-details card-body">
                    <h5>
                      <a href="#">{product.name}</a>
                    </h5>
                    <p>{product.price}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DiscountedProducts;
