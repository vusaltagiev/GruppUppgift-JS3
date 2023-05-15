import { useState } from 'react';
import { MdAddShoppingCart } from "react-icons/md";
import './ProductDetails.scss'

const ProductDetails = ({ product }) => {
    const [quantity, setQuantity] = useState(0);

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
            <button className="btn-add">
              {" "}
              Lägg till i kundvagn
              <MdAddShoppingCart className="cart-icon" />{" "}
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
  )
}

export default ProductDetails
