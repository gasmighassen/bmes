import { useState, useEffect } from "react";
import "../../_dist/Login.css";
import Login from "../login/Login";
import Register from "../register/Register";
import { useNavigate } from "react-router-dom";

type Props = {};

const BmesAccess = (props: Props) => {
  const isAuth = localStorage.getItem("token");
  const navigate = useNavigate();
  const [switchIam, setSwitchIam] = useState(() => {
    // Retrieve the stored value from localStorage
    const storedValue = localStorage.getItem("switchIam");
    return storedValue ? JSON.parse(storedValue) : true;
  });
  useEffect(() => {
    if (isAuth) {
      navigate("/");
    }

    return () => {
      setSwitchIam(true);
    };
  }, [isAuth]);

  useEffect(() => {
    // Store the state value in localStorage whenever it changes
    localStorage.setItem("switchIam", JSON.stringify(switchIam));
  }, [switchIam]);

  return (
    <div className="bmes__login__section">
      {switchIam ? (
        <Login toRegister={() => setSwitchIam(false)} />
      ) : (
        <Register toRegister={() => setSwitchIam(true)} />
      )}
    </div>
  );
};

export default BmesAccess;
