import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import useAuth from "../../hooks/useAuth";
import { useNavigate, useLocation } from "react-router";

const Register = () => {
  const navigate = useNavigate();
  let { user } = useAuth();
  if (user?.displayName) {
    navigate("/");
  }

  const location = useLocation();
  const uri = location.state?.from || "/home";

  const { setUser, setIsLoading, googleSignIn, setError, error } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const emailChange = (event) => {
    setEmail(event.target.value);
  };
  const PasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const nameChange = (event) => {
    setName(event.target.value);
  };

  const setUserName = () => {
    updateProfile(auth.currentUser, {
      displayName: name,
    }).then((result) => {});
  };
  const auth = getAuth();

  const createUser = () => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);
        setUserName();
      })
      .catch((error) => {
        setError(error.message);
        console.log(error.message);
      })
      .finally(navigate("/"));
  };
  const handleGoogle = () => {
    googleSignIn()
      .then((result) => {
        setUser(result.user);
        navigate(uri);
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="login-form">
      <h1 className="my-5 fw-bold fs-2">Create Account Here.</h1>
      <div>
        <form onSubmit={createUser}>
          <label className="mx-2 h4" htmlFor="name">
            Name
          </label>
          <input onBlur={nameChange} type="text" name="name" id="name" /> <br />{" "}
          <label className="mx-2 h4" htmlFor="email">
            Email
          </label>
          <input onBlur={emailChange} type="email" name="email" id="email" />{" "}
          <br />
          <label className="mx-2 h4" htmlFor="password">
            Password
          </label>
          <input
            onBlur={PasswordChange}
            type="password"
            name="password"
            id="password"
          />{" "}
          <br />
          <h5 className="text-danger">{error}</h5>
          <button type="submit" className="btn btn-success">
            Sign Up
          </button>
          <br /> <br />
        </form>
      </div>
      <div>
        <p>Sign in With</p>
        <button onClick={handleGoogle} className="mx-2 btn btn-danger">
          <i class="fab fa-google"></i>
        </button>

        <p>-------------------------</p>
        <p>
          Already a user ? <Link to="/login">Login Now</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
