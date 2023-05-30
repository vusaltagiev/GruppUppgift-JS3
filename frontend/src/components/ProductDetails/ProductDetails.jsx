import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { addToCart } from "../../store/cartSlice";
import { useDispatch } from "react-redux";
import "./ProductDetails.scss";

const ProductDetails = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const handleAddToCard = (product, quantity) => {
    if (quantity > 0) {
      dispatch(addToCart({ product, quantity }));
      setQuantity(0);
    }
  };

  const handleQuantityChange = (value) => {
    const newQuantity = quantity + value;
    if (newQuantity >= 0) {
      setQuantity(newQuantity);
    }
  };
  return (
    <>
      <div className="product-information">
        <h2>{product?.name}</h2>
        <p>{product?.description}</p>
        <hr />
        <h3>{product?.price}</h3>
        <div className="add-to-cart">
          <button
            className="btn-quantity"
            onClick={() => handleQuantityChange(-1)}
          >
            -
          </button>
          <input type="number" value={quantity} readOnly />
          <button
            className="btn-quantity"
            onClick={() => handleQuantityChange(1)}
          >
            +
          </button>
          <button
            className="btn-add"
            onClick={() => handleAddToCard(product, quantity)}
          >
            {" "}
            Lägg till i kundvagn
            <FaShoppingCart className="cart-icon" />{" "}
          </button>
        </div>

        <div className="colors">
          <div className="color black"></div>
          <div className="color red"></div>
          <div className="color yellow"></div>
          <div className="color blue"></div>
        </div>
        <button className="wishlist">Lägg till på önskelista </button>
        <p>{`Kategori: ${product?.category}`}</p>
      </div>
    </>
  );
};

export default ProductDetails;
