import React from "react";
import { Card } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";
// import CheckOut from "../../CheckOut/CheckOut";

const Service = ({ service }) => {
  const { id, name, price, description, image, available, minimumOrder } =
    service;
  // const navigate = useNavigate();
  // const handleCheckout = (id) => {
  //   navigate(`/checkout/${id}`);
  // };
  return (
    <Card className="mx-5 shadow rounded">
      <Card.Img variant="top" src={image} className="img-fluid" height={30} />
      <Card.Body className="bg-light text-dark pt-4">
        <Card.Title className="text-center">{name}</Card.Title>

        <Card.Text>COST: $ {price}</Card.Text>
        <Card.Text>AVAILABLE: {available} pieces</Card.Text>
        <Card.Text>MINIMUM ORDER: {minimumOrder} pieces</Card.Text>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
      <Card.Footer className="bg-light text-center">
        <button
          className="btn btn-primary px-5"
          // onClick={() => handleCheckout(id)}
        >
          CHECKOUT
        </button>
      </Card.Footer>
    </Card>
  );
};

export default Service;
