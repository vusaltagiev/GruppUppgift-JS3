import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './TopSelling.scss';

const TopSelling = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:7000/api/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching top selling products:', error);
      });
  }, []);

  return (
    <section className="product-area">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="text-center">
              <h3 className="title">Mest sålda produkterna denna vecka</h3>
            </div>
          </div>
        </div>
        <div className="row justify-content-center mt-4">
          <div className="col-12">
            <div className="card-group">
              {products.map(product => (
                <div className="card border-0" key={product._id}>
                  <img src={product.image} className="card-img-top" alt="product" />
                  <div className="card-body">
                    <h6 className="card-title">
                      <Link to={`/details/${product._id}`} className="text-decoration-none text-dark">{product.name}</Link>
                    </h6>
                    <p className="card-text">
                      <Link to={`/details/${product._id}`} className="text-decoration-none text-dark">${product.price}</Link>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopSelling;
