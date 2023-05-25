import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BestCollectionProduct from '../BestCollectionProduct/BestCollectionProduct';
import './BestCollectionAllProducts.scss'



const BestCollectionAllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch data from the API endpoint
    axios
      .get('http://localhost:7000/api/products')
      .then((response) => {
        const { data } = response;
        const extractedProducts = data.map(({ image, name, price }) => ({
          image,
          name,
          price,
        }));
        setProducts(extractedProducts);
      })
      .catch((error) => console.log(error));
  }, []);

  const productList = products.map((product, index) => (
    <div
      key={`link${index}`}
      className="gallery-item col-xl-3 col-lg-4 col-sm-6"
    >
      <BestCollectionProduct
        IMG={product.image}
        NAME={product.name}
        PRICE={product.price}
      />
    </div>
  ));

  return (
    <>
      <div className="gallery-section">
        <div className="gallery-isotope row">{productList}</div>
      </div>
    </>
  );
};

export default BestCollectionAllProducts;
