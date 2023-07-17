import React from "react";
import { Accordion } from "react-bootstrap";

const Benefits = () => {
  return (
    <div className="my-4 p-4">
      <div className="row align-items-center">
        <div className="col-lg-5 col-xs-12 mb-3">
          <img
            className="img-fluid"
            src="https://images.theconversation.com/files/434324/original/file-20211129-17-1kae8gu.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=900.0&fit=crop"
            alt=""
          />
        </div>
        <div className="col-lg-7 col-xs-12">
          <h2 className="fs-1 text-success fw-bold my-2">Why You Choose us?</h2>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Expert Team</Accordion.Header>
              <Accordion.Body>
                At The Clinic, we have a team of highly skilled and experienced
                medical professionals. Our doctors, nurses, and support staff
                are dedicated to providing exceptional patient care and are
                committed to your well-being.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Comprehensive Services</Accordion.Header>
              <Accordion.Body>
                We offer a wide range of medical services to address various
                health needs. Whether you require routine check-ups, preventive
                care, diagnostics, or treatment for acute and chronic
                conditions, we have you covered.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>State-of-the-Art Facilities</Accordion.Header>
              <Accordion.Body>
                The Clinic is equipped with modern medical technology and
                facilities to ensure accurate diagnoses and effective
                treatments. Our commitment to staying up-to-date with the latest
                advancements in healthcare ensures you receive top-notch care.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>Trust and Reliability</Accordion.Header>
              <Accordion.Body>
                The Clinic is a trusted healthcare partner for countless
                individuals and families in our community. Our reputation for
                excellence and reliability has been built on a foundation of
                delivering quality care and positive patient experiences.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
