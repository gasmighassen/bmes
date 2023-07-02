import React, { useEffect, useState } from "react";
import ButtonBmes from "../../components/button/ButtonBmes";
import "../../_dist/Login.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { bindActionCreators } from "redux";
import { userActionCreator } from "../../redux";


type Props = {
  toRegister?: React.Dispatch<React.SetStateAction<boolean>>;
};

const Login = ({}: Props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loginUser } = bindActionCreators(userActionCreator, dispatch);

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const handleLogin = async () => {
    try {
      await loginUser(login);
      const isAuth = localStorage.getItem("token");
      if (isAuth) {
       
        navigate(`/profile`);
      }
    } catch (error) {
      // Handle login error
    }
  };
  return (
    <div className="bmes__login__section">
      <div className="loginWrap">
        <div className="loginForm">
          <h1>Merci d'entrer vous informations de connexion</h1>
          <div className="formInputs">
            <p>Email</p>
            <input
              type="text"
              className="formTextItem"
              placeholder="email@exmaple.com"
              onChange={(e) => setLogin({ ...login, email: e.target.value })}
            />
            <p>Mot de passe</p>
            <input
              type="password"
              className="formTextItem"
              placeholder="**************"
              onChange={(e) => setLogin({ ...login, password: e.target.value })}
            />
            <p className="forgot__psw">Mot de passe oublié ?</p>
          </div>
          <ButtonBmes onClick={handleLogin}>Connecté</ButtonBmes>
          <p className="forgot__psw">
            Vous n'avez pas de compte?{" "}
            <span
              className="bmes__switch__iam"
              onClick={() => navigate("/register")}
            >
              Créer un compte
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
