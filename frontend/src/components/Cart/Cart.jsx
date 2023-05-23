import {
  decrement,
  increment,
  removeItemFromCart,
} from "../../store/cartSlice";
import "./Cart.scss";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cartItems);
  const dispatch = useDispatch();

  const increaceCartQuantity = (productId) => {
    dispatch(increment(productId));
  };

  const decreaceCartQuantity = (productId) => {
    dispatch(decrement(productId));
  };

  const removeFromCart = (productId) => {
    dispatch(removeItemFromCart(productId));
  };

  return (
    <div className="cartWrapper">
      {!(cartItems.length > 0) ? (
        <p className="cartDefaultMessage">Kundvagnen är tom</p>
      ) : (
        <div className="cartContent">
          {cartItems.map((item) => (
            <div className="cartItem" key={item.productId}>
              <div>
                <img className="cartImg" src={item.product.image} alt="" />
              </div>
              <div>
                <p>{item.product.name}</p>
                <div>
                  <button
                    className="quantityBtn"
                    onClick={() => decreaceCartQuantity(item.productId)}
                  >
                    {" "}
                    -{" "}
                  </button>
                  <div className="quantityCount">{item.quantity}</div>
                  <button
                    className="quantityBtn"
                    onClick={() => increaceCartQuantity(item.productId)}
                  >
                    {" "}
                    +{" "}
                  </button>
                  <button
                    className="cartDeleteBtn"
                    onClick={() => removeFromCart(item.productId)}
                  >
                    {" "}
                    Ta Bort{" "}
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
