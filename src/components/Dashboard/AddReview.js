import React, { useRef } from "react";
import { Form } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const AddReview = () => {
  const [user] = useAuthState(auth);
  const nameRef = useRef("");
  const desRef = useRef("");
  const ratingRef = useRef(0);
  const handleSubmit = (event) => {
    event.preventDefault();
    const description = desRef.current.value;
    const rating = parseInt(ratingRef.current.value);
    const review = { name: user?.displayName, description, rating };
    fetch("https://sheltered-reaches-94417.herokuapp.com/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
    toast.success("Thnaks for your review");
    desRef.current.value = "";
    ratingRef.current.value = "";
  };

  return (
    <div className="container mb-5 pb-5">
      <h2 className="text-primary text-center mt-5 fs-1">Add Review</h2>
      <div className="container">
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
            <Form.Label>Description</Form.Label>
            <Form.Control
              ref={desRef}
              type="textarea"
              placeholder="Enter Review"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Rating</Form.Label>
            <Form.Control
              ref={ratingRef}
              type="number"
              placeholder="Enter Rating"
              min={0}
              max={10}
              required
            />
          </Form.Group>
          <div className="text-center">
            <button className="btn btn-lg btn-primary">SUBMIT</button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default AddReview;
