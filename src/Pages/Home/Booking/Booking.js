import React from "react";
import { Link } from "react-router-dom";

const Booking = () => {
  return (
    <div className="booking row">
      <div className="col-lg-7 col-12">
        <p className="title">Are you looking for professional consultation?</p>
      </div>
      <div className="col-lg-5 col-12">
        <Link to="/booking">
          <button className="button-app">
            Book an appointment today{" "}
            <i class="fas fa-arrow-alt-circle-right"></i>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Booking;
