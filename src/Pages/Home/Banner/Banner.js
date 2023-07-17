import React from "react";
import { Carousel } from "react-bootstrap";

const Banner = () => {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block caro-img"
          src="https://highlandhospital.in/images/services/12bed-content.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>Welcome To The Clinic</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block caro-img"
          src="https://www.ucsfhealth.org/-/media/project/ucsf/ucsf-health/article/hero/10-ways-to-get-the-most-from-doctor-visit-2x.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>We Care For Our Patient</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block caro-img"
          src="https://hillcroftphysiciansblog.com/wp-content/uploads/2022/05/HP-Blog-Razavi-May-1-1.png"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Always At Your Service</h5>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
