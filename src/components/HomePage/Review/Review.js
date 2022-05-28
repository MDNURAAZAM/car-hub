import React from "react";

const Review = ({ review }) => {
  const { name, description, rating } = review;
  return (
    <div className="col-lg-4 col-sm-12 px-3 mx-auto">
      <div className="container-fluid shadow rounded p-3 bg-light text-center mb-3 border-top">
        <h4>Name : {name}</h4>
        <h5>Comments : {description}</h5>
        <p>Ratings: {rating} / 10</p>
      </div>
    </div>
  );
};

export default Review;
