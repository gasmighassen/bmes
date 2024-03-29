import React from "react";
import ButtonBmes from "../../components/button/ButtonBmes";
import "../../_dist/Register.css";
import { useNavigate } from "react-router-dom";

type Props = {};

const Register = ({}: Props) => {
  const navigate = useNavigate();
  return (
    <div className="bmes__login__section">
      <div className="register_Wrap">
        {" "}
        <div className="register_Form">
          <h1>Merci d'entrer vous informations de l'utilisateur</h1>
          <div className="formInputs">
            <p>Nom</p>
            <input type="text" className="formTextItem" placeholder="" />
            <p>Prénom</p>
            <input type="text" className="formTextItem" placeholder="" />
            <p>Adresse e-mail</p>
            <input type="text" className="formTextItem" placeholder="" />
            <p>Numéro de téléphone</p>
            <input type="text" className="formTextItem" placeholder="" />
            <p>Mot de passe</p>
            <input type="password" className="formTextItem" placeholder="" />
            <p>Confirmé votre mot de passe</p>
            <input type="password" className="formTextItem" placeholder="" />
          </div>
          <div className="action__iam">
            <ButtonBmes>S'inscrire</ButtonBmes>
          </div>

          <p className="forgot__psw">
            Vous possedez déja un compte?{" "}
            <span
              className="bmes__switch__iam"
              onClick={() => navigate("/login")}
            >
              Se connecter
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
