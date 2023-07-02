import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const AuthRoute = () => {
  let auth = localStorage.getItem("token");

  return auth ? <Navigate to="/profile" replace /> : <Outlet />;
};

export default AuthRoute;
