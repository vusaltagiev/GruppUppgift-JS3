import { useContext, useState } from "react";
import {
  decrement,
  increment,
  removeItemFromCart,
  resetCart,
} from "../../store/cartSlice";
import "./Cart.scss";
import { useDispatch, useSelector } from "react-redux";
import { AuthContext } from "../../contexts/AuthContext";

const Cart = () => {
  const { user } = useContext(AuthContext);
  const { cartItems } = useSelector((state) => state.cartItems);
  const dispatch = useDispatch();

  const [savedMessage, setSavedMessage] = useState("");

  const increaceCartQuantity = (productId) => {
    dispatch(increment(productId));
  };

  const decreaceCartQuantity = (productId) => {
    dispatch(decrement(productId));
  };

  const removeFromCart = (productId) => {
    dispatch(removeItemFromCart(productId));
  };

  const saveOrder = async () => {
    try {
      const res = await fetch("http://localhost:7000/orders", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${user.token}`,
          "content-type": "application/json",
        },
        body: JSON.stringify({
          products: cartItems.map((item) => {
            return {
              product: item.productId,
              quantity: item.quantity,
            };
          }),
        }),
      });

      if (res.status === 201) {
        setSavedMessage("Order saved");

        setTimeout(() => {
          dispatch(resetCart());
        }, 2000);
      }
    } catch (error) {
      setSavedMessage("Error");
    }
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
                    -
                  </button>
                  <div className="quantityCount">{item.quantity}</div>
                  <button
                    className="quantityBtn"
                    onClick={() => increaceCartQuantity(item.productId)}
                  >
                    +
                  </button>
                  <button
                    className="cartDeleteBtn"
                    onClick={() => removeFromCart(item.productId)}
                  >
                    Ta Bort
                  </button>
                </div>
              </div>
            </div>
          ))}
          {user ? (
            <>
              <button className="save-order" onClick={saveOrder}>
                Spara Ordern
              </button>
              {savedMessage && <p>{savedMessage}</p>}
            </>
          ) : (
            <p>Logga in för att spara</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Cart;
