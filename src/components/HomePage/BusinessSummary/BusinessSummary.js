import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faEarthAsia,
  faStar,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const BusinessSummary = () => {
  return (
    <div className="container">
      <h2 className="text-primary text-center mt-5 fs-1">PORTFOLIO</h2>
      <div className="row mt-5">
        <div className="col-lg-3 col-sm-12 mx-auto">
          <div className="container-fluid shadow rounded p-3 bg-light text-center mb-3 border">
            <FontAwesomeIcon icon={faUsers} size="2x" color="dodgerblue" />
            <h1 className="fw-bold pt-1">250+</h1>
            <h4 className="text-primary">Clients</h4>
          </div>
        </div>
        <div className="col-lg-3 col-sm-12 mx-auto">
          <div className="container-fluid shadow rounded p-3 bg-light text-center mb-3 border">
            <FontAwesomeIcon icon={faEarthAsia} size="2x" color="dodgerblue" />
            <h1 className="fw-bold pt-1">50</h1>
            <h4 className="text-primary">Countries</h4>
          </div>
        </div>
        <div className="col-lg-3 col-sm-12 mx-auto">
          <div className="container-fluid shadow rounded p-3 bg-light text-center mb-3 border">
            <FontAwesomeIcon icon={faStar} size="2x" color="dodgerblue" />
            <h1 className="fw-bold pt-1">500+</h1>
            <h4 className="text-primary">Reviews</h4>
          </div>
        </div>
        <div className="col-lg-3 col-sm-12 mx-auto">
          <div className="container-fluid shadow rounded p-3 bg-light text-center mb-3 border">
            <FontAwesomeIcon icon={faPhone} size="2x" color="dodgerblue" />
            <h1 className="fw-bold pt-1">24/7</h1>
            <h4 className="text-primary">Help Line</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummary;
