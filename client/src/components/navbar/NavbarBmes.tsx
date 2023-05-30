import React, { useState } from "react";
import "../../_dist/NavBarBmes.css";
import { Link, useNavigate } from "react-router-dom";

type Props = {};

const NavbarBmes = (props: Props) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  return (
    <div className="bmes__navbar">
      <div className={`nav__items ${open && "open"}`}>
        <Link className="nav__item" to={"/"}>
          Acceuil
        </Link>
        <Link className="nav__item" to={"/services"}>
          Services
        </Link>
        <Link className="nav__item" to={"/about"}>
          A Propos
        </Link>
        <Link className="nav__item" to={"/contact"}>
          Contactez-nous
        </Link>
      </div>
      <div
        className={`nav-toggle ${open && "open"}`}
        onClick={() => setOpen(!open)}
      >
        <div className="bar"></div>
      </div>
      <div className="bmes__logo">
        <img
          src="/images/logo-bmes-01.svg"
          alt=""
          onClick={() => navigate("/")}
        />
      </div>
    </div>
  );
};

export default NavbarBmes;
