import { useState, useEffect } from "react";
import "../../_dist/Login.css";
import Login from "../login/Login";
import Register from "../register/Register";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

type Props = {};

const BmesAccess = (props: Props) => {
  const isAuth = useSelector(
    (state: { user: { isAuth: boolean } }) => state.user.isAuth
  );

  return <div className="bmes__login__section"></div>;
};

export default BmesAccess;
