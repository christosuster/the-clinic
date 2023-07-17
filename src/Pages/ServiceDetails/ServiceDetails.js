import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const ServiceDetails = () => {
  const { serviceName } = useParams();
  const [service, setService] = useState([]);
  useEffect(() => {
    fetch("/data.JSON")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  const found = service.find((sr) => sr.name === serviceName);
  if (found) {
    var { name, img, descrption, doc, cost } = found;
  }

  return (
    <div
      className="my-5"
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1 className="my-3  text-success fs-2 fw-bold">{name} Package</h1>
      <img className="w-25 h-25 mb-4" src={img} alt="" />
      <h4 className="my-2">Dept Head: {doc} </h4>
      <h4 className="text-danger my-4">Package Cost: {cost} </h4>
      <p className="w-50">{descrption} </p>
      <Link to="/booking">
        <Button variant="success my-2" className="button-success">
          {" "}
          Book Appointment
        </Button>
      </Link>
    </div>
  );
};

export default ServiceDetails;
