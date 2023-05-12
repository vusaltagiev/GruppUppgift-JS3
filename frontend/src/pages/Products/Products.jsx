import "./Products.scss";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../../contexts/ProductContext";

const Products = () => {

  const { products } = useContext(ProductContext)
  

  return (
    <div className="container product-page">
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

export default Products;
