import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Doctor from "../Doctor/Doctor";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    fetch("/doctors.JSON")
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);
  return (
    <div className="p-4 common-styles">
      <h2 className=" my-3  fw-bold display-4">Our Team</h2>
      <Row xs={1} md={2} lg={3}>
        {doctors.map((doctor) => (
          <Doctor doctor={doctor}></Doctor>
        ))}
      </Row>
    </div>
  );
};

export default Doctors;
