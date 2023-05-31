import { useContext, useEffect, useMemo, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import "./Profile.scss";
import OrderCard from "../../components/OrderCard/OrderCard";

const Profile = () => {
  const { user, logout } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:7000/orders/user", {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    })
      .then((res) => res.json())
      .then(setOrders)
      .catch((err) => console.log(err));
  }, []);

  const currentOrders = useMemo(() => {
    return orders.filter((o) => o.status !== "delivered");
  }, [orders]);

  const deliveredOrders = useMemo(() => {
    return orders.filter((o) => o.status === "delivered");
  }, [orders]);

  return (
    <div className="container">
      <div className="flex">
        <p className="user-name">{user?.user.email}</p>
        <button onClick={logout} className="logout-btn">
          Logga ut
        </button>
      </div>
      <div className="orders-wrapper">
        <h4>Aktuella beställningar</h4>
        <ul className="order-container">
          {currentOrders.length > 0 ? (
            currentOrders.map((order) => (
              <OrderCard order={order} key={order._id} />
            ))
          ) : (
            <p>Inga aktuella beställningar</p>
          )}
        </ul>
      </div>
      <div>
        <h4>Levererade beställningar</h4>
        <ul className="order-container">
          {deliveredOrders.length > 0 ? (
            deliveredOrders.map((order) => (
              <OrderCard order={order} key={order._id} />
            ))
          ) : (
            <p>Inga Levererade beställningar</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Profile;
