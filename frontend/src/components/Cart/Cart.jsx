import {
  decrement,
  increment,
  removeItemFromCart,
} from "../../redux/cartSlice";
import "./Cart.scss";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cartItems);
  const dispatch = useDispatch();

  const handleIncrement = (productId) => {
    dispatch(increment(productId));
  };

  const handleDecrement = (productId) => {
    dispatch(decrement(productId));
  };

  const handleDelete = (productId) => {
    dispatch(removeItemFromCart(productId));
  };

  return (
    <div className="cart">
      {!(cartItems.length > 0) ? (
        <p className="cart-empty-text">Cart is empty</p>
      ) : (
        <div className="cart-list">
          {cartItems.map((item) => (
            <div className="cart-item" key={item.productId}>
              <div className="cart-item-image-wrapper">
                <img src={item.product.image} alt="" />
              </div>
              <div>
                <p className="cart-item-title">{item.product.name}</p>
                <div>
                  <button
                    className="cart-quantity-button"
                    onClick={() => handleDecrement(item.productId)}
                  >
                    -
                  </button>
                  <span className="cart-item-quantity">{item.quantity}</span>
                  <button
                    className="cart-quantity-button"
                    onClick={() => handleIncrement(item.productId)}
                  >
                    +
                  </button>
                  <button
                    className="cart-delete-button"
                    onClick={() => handleDelete(item.productId)}
                  >
                    Ta Bort
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
