import React, { useEffect, useState } from "react";
import { CardGroup } from "react-bootstrap";
import Service from "../Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <h2 className="text-primary text-center mt-5 fs-1">PRODUCTS</h2>
      <CardGroup className="m-5">
        {services.map((service) => (
          <Service service={service} key={service.id}></Service>
        ))}
      </CardGroup>
    </div>
  );
};

export default Services;
