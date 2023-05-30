import "./OrderCard.scss";

const OrderCard = ({ order }) => {
  console.log(order);
  return (
    <li className="order-card" key={order._id}>
      <div className="flex">
        <p>
          <b>Status: </b>
          <span className="order-status">{order?.status}</span>
        </p>
        {order.createdAt && (
          <p>
            <b>Order Date: </b>
            <span>{order?.createdAt.split("T")[0]}</span>
          </p>
        )}
      </div>
      <div>
        <b>Products</b>
        <div className="order-products-container">
          {order.products?.map((p) => (
            <div className="order-product-card flex" key={p._id}>
              <div>
                <img src={p.product?.image} alt="" />
              </div>
              <div>
                <b>{p.product?.name}</b>
                <p>Quantity: {p.quantity}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </li>
  );
};

export default OrderCard;
