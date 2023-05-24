import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BestCollectionProduct from '../BestCollectionProduct/BestCollectionProduct';

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
    <BestCollectionProduct
      key={`link${index}`}
      IMG={product.image}
      NAME={product.name}
      PRICE={product.price}
    />
  ));

  return (
  <>
    <div className="gallery-section">
    <div className="gallery-isotope row">
      { productList}
    </div>
    </div>
  </>
 )};

export default BestCollectionAllProducts;
