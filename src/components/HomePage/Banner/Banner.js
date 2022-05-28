import React from "react";
import image from "../../../images/banner.png";

const Banner = () => {
  return (
    <div className="container">
      <div className="row d-flex flex-sm-column flex-lg-row align-items-center justify-content-center">
        <div className="col-sm-12 col-lg-6 mt-5 order-2 order-lg-1">
          <h1 className="text-primary">I'm Doctor XYZ</h1>
          <p>
            As a surgeon, I will perform operations by cutting open a patient's
            body to repair, remove or replace the diseased or damaged part. As
            well as operating, I will carry out ward rounds and outpatients
            clinics and will take on a range of administrative duties and
            teaching responsibilities. Becoming a surgeon can take many years
            and there needs a high level of commitment to succeed. Competition
            for places can be fierce, particularly in the later stages of
            training. New surgery techniques are continually evolving so I will
            learn new skills throughout my career and try to improve my skills.
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
