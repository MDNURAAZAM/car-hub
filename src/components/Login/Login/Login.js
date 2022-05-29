import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const location = useLocation();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const navigate = useNavigate();
  let from = location.state?.from?.pathname || "/";

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
  };
  let errorElement = "";
  if (error) {
    errorElement = (
      <div>
        <p className="text-danger">Error: {error.message}</p>
      </div>
    );
  }

  if (user) {
    // const email = user?.user?.email;
    // const currentUser = { email: email };
    // console.log(currentUser);
    // if (email) {
    //   fetch(`http://localhost:5000/user/${email}`, {
    //     method: "PUT",
    //     headers: {
    //       "content-type": "application/json",
    //     },
    //     body: JSON.stringify(currentUser),
    //   })
    //     .then((res) => res.json())
    //     .then((data) => {
    //       console.log(data);
    //     });
    // }
    navigate(from, { replace: true });
  }

  return (
    <div className="container w-50 mx-auto border border-1 shadow mt-3 p-5">
      <h2 className="text-primary text-center">Please Login</h2>
      <Form onSubmit={handleLoginSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="mb-4 px-3">
          Login
        </Button>
        {errorElement}
      </Form>

      <p className="mt-3">
        <span className="text-primary">
          <Link to="/forgotPassword" style={{ textDecoration: "none" }}>
            Forgot Password?
          </Link>
        </span>
      </p>
      <p className="mt-3">
        New to Doctor ANY?{" "}
        <span className="text-primary">
          <Link to="/register" style={{ textDecoration: "none" }}>
            Please Register
          </Link>
        </span>
      </p>
      <div>
        <h4 className="text-center">or</h4>
      </div>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;
