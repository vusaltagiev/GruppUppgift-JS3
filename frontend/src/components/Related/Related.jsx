import { useEffect, useState } from "react";
import "./Related.scss";
import { Link } from "react-router-dom";

const Related = () => {
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    const randomProducts = async () => {
      try {
        const res = await fetch("http://localhost:7000/api/products");
        const data = await res.json();
        setRelatedProducts(data);
      } catch (error) {
        console.error(error);
      }
    };
    randomProducts();
  }, [location]);

  const getRandomProducts = (products) => {
    const randomIndex = Math.floor(
      Math.random() * (relatedProducts.length - 4)
    );
    return products.slice(randomIndex, randomIndex + 4);
  };

  return (
    <>
      <div className="related-container">
        <h2>Related Products</h2>
        <div className="related-products">
          {relatedProducts &&
            getRandomProducts(relatedProducts).map((product) => (
              <Link
                to={`/details/${product._id}`}
                className="related-product"
                key={product._id}
              >
                <img src={product.image} alt="" />
                <h3>{product.name}</h3>
                <p>{product.price}</p>
              </Link>
            ))}
        </div>
      </div>
    </>
  );
};

export default Related;
