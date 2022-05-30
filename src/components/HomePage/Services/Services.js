import React, { useEffect, useState } from "react";
import { CardGroup } from "react-bootstrap";
import Service from "../Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://sheltered-reaches-94417.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <h2 className="text-primary text-center mt-5 fs-1">PRODUCTS</h2>
      <CardGroup className="m-5">
        {services.map((service) => (
          <Service service={service} key={service._id}></Service>
        ))}
      </CardGroup>
    </div>
  );
};

export default Services;
