import "./Products.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProducts } from "../../store/productsSlice";

const Products = () => {
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

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
