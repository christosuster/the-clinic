import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useLocation } from "react-router";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const navigate = useNavigate();
  let { user } = useAuth();
  if (user?.displayName) {
    navigate("/");
  }

  const {
    googleSignIn,
    gitSignIn,
    fbSignIn,
    setUser,
    setIsLoading,
    setError,
    error,
  } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth();

  const emailChange = (event) => {
    setEmail(event.target.value);
  };
  const PasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const signInEmail = () => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);
        console.log(result.user);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
    navigate(uri);
  };

  const location = useLocation();
  const uri = location.state?.from || "/home";

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
      <h2 className="my-5 fw-bold fs-2">Please Sign In</h2>
      <div>
        <form onSubmit={signInEmail}>
          <label className="mx-2 h4" htmlFor="email">
            Email
          </label>
          <input
            onBlur={emailChange}
            type="email"
            name="email"
            id="email"
            placeholder="Email"
          />
          <br /> <br />
          <label className="mx-2 h4" htmlFor="password">
            Password
          </label>
          <input
            onBlur={PasswordChange}
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />{" "}
          <br /> <br />
          <button type="submit" className="btn btn-success">
            Sign In
          </button>
          <br /> <br />
          <h5 className="text-danger"> {error} </h5>
        </form>
      </div>

      <div className="my-3">
        <p>Sign in With</p>
        <button onClick={handleGoogle} className="mx-2 btn btn-danger">
          <i class="fab fa-google"></i>
        </button>
      </div>

      <div>
        <p>-------------------------</p>
        <p>
          New User ? <Link to="/register">Create a Account</Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Login;
