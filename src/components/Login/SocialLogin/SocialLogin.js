import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import google from "../../../images/googleLogo/google.png";
import Loading from "../../Loading/Loading";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  let errorElement = "";
  if (loading) {
    return <Loading></Loading>;
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
  if (error) {
    errorElement = (
      <div>
        <p className="text-danger">Error: {error.message}</p>
      </div>
    );
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
