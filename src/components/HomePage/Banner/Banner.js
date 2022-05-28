import React from "react";
import image from "../../../images/banner.png";

const Banner = () => {
  return (
    <div className="container">
      <div className="row d-flex flex-sm-column flex-lg-row align-items-center justify-content-center">
        <div className="col-sm-12 col-lg-6 mt-5 order-2 order-lg-1">
          <h1 className="text-primary">CAR HUB</h1>
          <p>
            CAR HUB is an American supplier of axles, driveshafts,
            transmissions, and electrodynamic, thermal, sealing, and digital
            equipment for conventional, hybrid, and electric-powered vehicles.
            The company's products and services are aimed at the light vehicle,
            commercial vehicle, and off-highway equipment markets.
          </p>
        </div>
        <div className="col-sm-12 col-lg-6 order-1 order-lg-2">
          <img src={image} alt="" className="w-100" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
