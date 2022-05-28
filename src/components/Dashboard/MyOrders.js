import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth/dist/index.cjs";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";
import Table from "react-bootstrap/Table";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/order?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => setOrders(data));
    }
  }, [user, orders]);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/order/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div className="container mb-5 pb-5">
      <h2 className="text-primary text-center mt-5 fs-1">My Orders</h2>
      <Table responsive>
        <thead>
          <tr className="text-center">
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Cost</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {orders.map((order) => (
            <tr>
              <td>{order.product}</td>
              <td>${order.price}</td>
              <td>{order.quantity}</td>
              <td>${order.price * order.quantity}</td>
              <td>
                <button
                  className="btn btn-danger btn-sm px-3"
                  onClick={() => handleDelete(order._id)}
                >
                  X
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default MyOrders;
