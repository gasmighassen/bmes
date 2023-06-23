import React, { useState } from "react";
import ButtonBmes from "../../components/button/ButtonBmes";
import "../../_dist/Login.css";
import { Link } from "react-router-dom";
type Props = {
  toRegister: React.Dispatch<React.SetStateAction<boolean>>;
};

const Login = ({ toRegister }: Props) => {
  const [login, setlogin] = useState({
    email: "",
    password: "",
  });
  return (
    <div className="loginWrap">
      {" "}
      <div className="loginForm">
        <h1>Merci d'entrer vous informations de connexion</h1>
        <div className="formInputs">
          <p>Email</p>
          <input
            type="text"
            className="formTextItem"
            placeholder="email@exmaple.com"
            onChange={(e) => setlogin({ ...login, email: e.target.value })}
          />
          <p>Mot de passe</p>
          <input
            type="password"
            className="formTextItem"
            placeholder="**************"
            onChange={(e) => setlogin({ ...login, password: e.target.value })}
          />
          <p className="forgot__psw">Mot de passe oublié ?</p>
        </div>
        <ButtonBmes>Connecté</ButtonBmes>
        <p className="forgot__psw">
          Vous n'avez pas de compte?{" "}
          <span className="bmes__switch__iam" onClick={() => toRegister(false)}>Créer un compte</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
