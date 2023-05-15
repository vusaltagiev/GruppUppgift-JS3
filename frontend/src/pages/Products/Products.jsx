import "./Products.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../../redux/productsSlice";

const Products = () => {
  const dispatch = useDispatch();

  // Use this in other components if you need the products
  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

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
