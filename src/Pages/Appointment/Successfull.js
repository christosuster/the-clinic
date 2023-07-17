import React from "react";
import { Link } from "react-router-dom";

const Successfull = () => {
  return (
    <div className="mt-5 mb-5 book-success">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgfsd-_Hgyq8gDXB24k6vPfrKJsh53dQhrUcQCHGbLmICAO_4bnUbDHP8cdDdzS43zVFY&usqp=CAU"
        alt=""
      />

      <h2 className="mt-3">We have Recieved your Booking.</h2>
      <Link to="/">
        <button className="btn btn-success">Okay</button>
      </Link>
    </div>
  );
};

export default Successfull;
