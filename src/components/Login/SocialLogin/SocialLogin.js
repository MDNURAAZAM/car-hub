import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import useToken from "../../../hooks/useToken";
import google from "../../../images/googleLogo/google.png";
import Loading from "../../Loading/Loading";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [token] = useToken(user);
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  let errorElement = "";
  if (loading) {
    return <Loading></Loading>;
  }

  if (error) {
    errorElement = (
      <div>
        <p className="text-danger">Error: {error.message}</p>
      </div>
    );
  }
  if (user) {
    navigate(from, { replace: true });
  }

  return (
    <div className="text-center mt-3">
      <button
        onClick={() => signInWithGoogle()}
        className="btn btn-outline-primary w-75 rounded-pill mb-3"
      >
        <img src={google} alt="" />
        <span className="fs-5 ms-2">Sign in with Google</span>
      </button>
      {errorElement}
    </div>
  );
};

export default SocialLogin;
