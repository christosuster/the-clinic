import React from "react";
import useAuth from "../../hooks/useAuth";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  let { user } = useAuth();

  console.log(user?.displayName);

  if (!user?.displayName) {
    return <Navigate to="/login" />;
  } else return children;
};

export default PrivateRoute;
