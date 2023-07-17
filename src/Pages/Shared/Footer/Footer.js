import React from "react";

const Footer = () => {
  return (
    <div className="footer-all w-100 p-2">
      <div className="container">
        <h4 className="font-weight-bolder py-1">Contact Us</h4>
        <div className="row">
          <h6 className=" col-sm-4">support@theclinic.com</h6>
          <h6 className="col-sm-4">(800) 555-0100</h6>
          <h6 className="col-sm-4">
            60 West Avenue Drive, New York City, New York
          </h6>
        </div>
      </div>
      <footer>Copyright © 2023</footer>
    </div>
  );
};

export default Footer;
