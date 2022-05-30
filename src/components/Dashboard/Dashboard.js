import React, { useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth/dist/index.cjs";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div className="container ">
      {/* <h1 className="text-primary text-center mt-5 fs-1">DASHBOARD</h1> */}
      <div className="row shadow">
        <div className="col-4 mt-5">
          <div className="row">
            {!admin && (
              <div className="col-12 mb-3">
                <Link to="/dashboard">
                  <button className="btn btn-lg btn-primary w-50">
                    MY ORDERS
                  </button>
                </Link>
              </div>
            )}
            {!admin && (
              <div className="col-12 mb-3">
                <Link to="/dashboard/addReview">
                  <button className="btn btn-lg btn-primary w-50">
                    ADD REVIEW
                  </button>
                </Link>
              </div>
            )}
            <div className="col-12 mb-3">
              <Link to="/dashboard/MyProfile">
                <button className="btn btn-lg btn-primary w-50">
                  MY PROFILE
                </button>
              </Link>
            </div>
            {admin && (
              <div className="col-12 mb-3">
                <Link to="/dashboard/users">
                  <button className="btn btn-lg btn-primary w-50">
                    ALL USERS
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
        <div className="col-8">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
