import React from "react";
import { Table } from "react-bootstrap";
import { useQuery } from "react-query";
import Loading from "../Loading/Loading";
import ManageOrder from "./ManageOrder";

const ManageOrders = () => {
  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch(`https://sheltered-reaches-94417.herokuapp.com/orders`).then((res) =>
      res.json()
    )
  );

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="container mb-5 pb-5">
      <h2 className="text-primary text-center mt-5 fs-1">All Orders</h2>
      <Table responsive>
        <thead>
          <tr className="text-center">
            <th>User</th>
            <th>Product</th>
            <th>Quantity</th>
            <th>Total Cost</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {orders.map((order) => (
            <tr key={order._id}>
              <td>{order.email}</td>
              <td>{order.product}</td>
              <td>{order.quantity}</td>
              <td>${order.price * order.quantity}</td>
              <td>{order.address}</td>
              <td>{order.phoneNumber}</td>

              <td>
                <button
                  className="btn btn-danger btn-sm px-3"
                  //   onClick={() => handleDelete(order._id)}
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

export default ManageOrders;
