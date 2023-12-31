import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Service from "../../Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("/data.JSON")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="mt-4 mx-5">
      <h2 className="fs-1 text-success fw-bold">Our Services</h2>
      <Row className="cards" xs={1} md={2} lg={3}>
        {services.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </Row>
    </div>
  );
};

export default Services;
