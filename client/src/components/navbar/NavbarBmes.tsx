import React, { useState } from "react";
import "../../_dist/NavBarBmes.css";
import {Link} from "react-router-dom"

type Props = {};

const NavbarBmes = (props: Props) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="bmes__navbar">
      
      <div className={`nav__items ${open && "open"}`}>
        <Link className="nav__item" to={"/"}>Home</Link>
        <Link className="nav__item" to={"/services"}>Services</Link>
        <Link className="nav__item" to={"/about"}>About</Link>
        <Link className="nav__item" to={"/contact"}>Contact</Link>
      </div>
      <div
        className={`nav-toggle ${open && "open"}`}
        onClick={() => setOpen(!open)}
      >
        <div className="bar"></div>
      </div>
      <div className="bmes__logo">
        <img src="/images/logo-bmes-01.svg" alt="" />
      </div>
    </div>
  );
};

export default NavbarBmes;
