import React from "react";
import { Button, FormControl } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import { toast } from "react-toastify";

const Subscribe = () => {
  const handleSubscribe = () => {
    toast.success("Thank you for subscribing");
  };

  return (
    <div className="container mb-5">
      <h2 className="text-primary text-center mt-5 mb-3 fs-1">SUBSCRIBE</h2>
      <div className="mx-5 shadow rounded">
        <InputGroup className="bg-light text-dark">
          <FormControl
            placeholder="Enter email to know more about us"
            type="email"
            required
          />
          <Button
            variant="primary"
            className="btn btn-lg"
            onClick={handleSubscribe}
          >
            SUBSCRIBE
          </Button>
        </InputGroup>
      </div>
    </div>
  );
};

export default Subscribe;
