import React from "react";
import image from "../../../images/ceo.png";

const MeetCeo = () => {
  return (
    <div className="container">
      <div className="row d-flex flex-sm-column flex-lg-row align-items-center justify-content-center">
        <h1 className="text-primary text-center mt-5 mb-3 fs-1">
          MEET OUR CEO
        </h1>

        <div className="col-sm-12 col-lg-6 order-1 order-lg-1">
          <img src={image} alt="" className="w-100" />
        </div>

        <div className="col-sm-12 col-lg-6 mt-5 order-2 order-lg-2">
          <p>
            XYZ (born November 1, 1960) is an American business executive and
            engineer who has been the chief executive officer of Apple Inc.
            since 2011. Cook previously served as the company's chief operating
            officer under its co-founder Steve Jobs.Cook joined Apple in March
            1998 as a senior vice president for worldwide operations, and then
            served as the executive vice president for worldwide sales and
            operations.He was made the chief executive on August 24, 2011, prior
            to Jobs' death in October of that year. During his tenure as the
            chief executive, he has advocated for the political reformation of
            international and domestic surveillance, cybersecurity, American
            manufacturing, and environmental preservation. Since 2011 when he
            took over Apple, to 2020, Cook doubled the company's revenue and
            profit, and the company's market value increased from $348 billion
            to $1.9 trillion. In 2014, Cook became the first chief executive of
            a Fortune 500 company to publicly come out as gay. Cook also serves
            on the boards of directors of Nike, Inc. and the National Football
            Foundation; he is a trustee of Duke University, his alma mater.
            Outside of Apple, Cook engages in philanthropy, and in March 2015,
            he said he planned to donate his fortune to charity.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MeetCeo;
