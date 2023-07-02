import React from "react";
import { Navigate, Outlet } from "react-router-dom";

type Props = {};

const UserPrivateRoute = (props: Props) => {
  let auth = localStorage.getItem("token");

  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default UserPrivateRoute;
