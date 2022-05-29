import React from "react";

const MyPortfolio = () => {
  return (
    <div className="container m-5">
      <h1>MD NURA AZAM</h1>
      <h3>Email: nuraazam20@gmail.com</h3>
      <h3>EDUCATION: Bsc. in CSE</h3>
      <h3>
        SKILLS: HTML, CSS, JAVASCRIPT, REACT, JAVA, PYTHON, GITHUB, NODE,
        EXPRESS, MONGODB
      </h3>
      <div className="projects">
        <a href="https://laptop-doctor.netlify.app/">
          {" "}
          <button className="btn btn-primary btn-lg m-5">PROJECT 1</button>
        </a>
        <a href="https://shopping-cart-azam.netlify.app/">
          {" "}
          <button className="btn btn-primary btn-lg m-5">PROJECT 2</button>
        </a>
        <a href="https://surgeon-any.web.app/">
          {" "}
          <button className="btn btn-primary btn-lg m-5">PROJECT 3</button>
        </a>
      </div>
    </div>
  );
};

export default MyPortfolio;
