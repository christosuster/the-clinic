import React from "react";
import { useNavigate } from "react-router-dom";

const Appointment = () => {
  const navigate = useNavigate();

  const success = () => {
    navigate("/booking/success");
  };
  return (
    <div className="form">
      <h2 className=" fw-bold display-3 py-3">Book An Appointment Now</h2>
      <form className="my-5 " onSubmit={success}>
        <div className="mb-3">
          <input
            className="mx-2 w-100"
            type="text"
            name="name"
            placeholder="First Name"
            required
          />
        </div>

        <div className="mb-3">
          <input
            className="mx-2 w-100"
            type="text"
            name="name"
            id="name "
            placeholder="Last Name"
            required
          />
        </div>

        <div className="mb-3">
          <input
            required
            className=" mx-2 w-100"
            type="email"
            name=""
            id=""
            placeholder="Email Address"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            name=""
            id=""
            placeholder="Age"
            className="mx-2 w-100"
          />
        </div>

        <div className="mb-3">
          <input type="radio" id="male" name="gender" value="Male" />
          <label className="mx-2 text-black fw-bold" for="male ">
            Male
          </label>
          <input type="radio" id="female" name="gender" value="Female" />
          <label className="mx-2 fw-bold text-black" for="female">
            Female
          </label>
        </div>
        <div className="mb-3">
          <label className="mx-2 text-black fw-bold" htmlFor="date">
            Choose Date
          </label>
          <input required type="date" name="" id="" className="mx-2 w-100" />
        </div>
        <div>
          <label className="mx-2 text-black fw-bold" htmlFor="time">
            Pick Time
          </label>
          <input required type="time" name="" id="" /> <br /> <br />
        </div>
        <button type="submit" class="btn btn-success">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Appointment;
