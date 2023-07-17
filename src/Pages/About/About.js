import React from "react";

const About = () => {
  return (
    <div className="p-3 common-styles">
      <h1 className="pt-5  fw-bold display-3">About Us</h1>
      <div className="row p-5">
        <div className="col-lg-6 my-5">
          <img
            className="rounded-3 img-fluid"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Hospital-de-Bellvitge.jpg/640px-Hospital-de-Bellvitge.jpg"
            alt=""
          />
        </div>
        <div className="col-lg-6 my-5 about-text">
          <h2>Who are we?</h2>
          <p>
            The Clinic is proud to have a team of highly skilled and experienced
            medical practitioners who are passionate about their work. From our
            caring and empathetic doctors to our attentive nursing staff and
            friendly support personnel, every member of The Clinic team plays a
            crucial role in delivering exceptional patient care.
          </p>
        </div>
      </div>

      <div className="row p-5 ">
        <div className="col-lg-6 my-5 about-text">
          <h2>Our Mission</h2>
          <p>
            At the core of our mission is a simple but powerful goal: to improve
            lives through compassionate and comprehensive healthcare. We strive
            to be the trusted healthcare partner for individuals and families in
            our community, offering a wide range of medical services to address
            various health needs.
          </p>
        </div>
        <div className="col-lg-6 my-5">
          <img
            className="rounded-3 img-fluid"
            src="https://image.freepik.com/free-photo/young-handsome-physician-medical-robe-with-stethoscope_1303-17818.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default About;
