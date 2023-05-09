import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import "./Home.scss";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`http://localhost:7000/api/products`);
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);
  return (
    <div className="home-page container">
      <ul className="products-list">
        {products?.map((product, index) => (
          <li key={index} className="product">
            <Link to={`/details/${product._id}`}>
              <div>
                <img src={product.image} alt="" />
                <p>{product.name}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
