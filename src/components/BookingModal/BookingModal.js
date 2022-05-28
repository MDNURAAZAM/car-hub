import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";

const BookingModal = (props) => {
  const { user, product } = props;
  const emailRef = useRef("");
  const quantityRef = useRef();
  const nameRef = useRef("");
  const addressRef = useRef("");
  const phoneNumberRef = useRef("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const name = nameRef.current.value;
    const quantity = quantityRef.current.value;
    const address = addressRef.current.value;
    const phoneNumber = phoneNumberRef.current.value;

    const order = {
      product: product?.name,
      price: product?.price,
      name,
      email,
      quantity,
      address,
      phoneNumber,
    };

    fetch("http://localhost:5000/order", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    props.onHide();
    toast.success("Thanks for your order");
  };

  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title
            id="contained-modal-title-vcenter"
            className="text-primary fs-1"
          >
            Product : {product?.name?.toUpperCase()}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control
                ref={nameRef}
                type="text"
                placeholder="Enter Your Name"
                value={user?.displayName}
                disabled
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                ref={emailRef}
                type="email"
                placeholder="Enter email"
                value={user?.email}
                disabled
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Product Quantity</Form.Label>
              <Form.Control
                ref={quantityRef}
                type="number"
                placeholder="Enter Quantity"
                min={product?.minimumOrder}
                max={product?.available}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Address</Form.Label>
              <Form.Control
                ref={addressRef}
                type="text"
                placeholder="Enter Address"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                ref={phoneNumberRef}
                type="number"
                placeholder="Enter Phone Number"
                required
              />
            </Form.Group>
            <div className="text-center">
              <button className="btn btn-lg btn-primary">SUBMIT</button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default BookingModal;
