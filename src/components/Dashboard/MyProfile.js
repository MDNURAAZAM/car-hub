import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";

const MyProfile = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div className="container mb-5 pb-5">
      <h1 className="text-primary text-center mt-5 fs-1">My Profile</h1>
      <div className="container mt-5 text-center">
        {user?.displayName && <h3> Name : {user?.displayName}</h3>}
        <h3>Email : {user?.email}</h3>
        <h3>Role : {admin ? "Admin" : "User"}</h3>
      </div>
    </div>
  );
};

export default MyProfile;
