import React, { useState } from "react";
import "../../_dist/NavBarBmes.css";
import { Link, NavLink } from "react-router-dom";

type Props = {};

const NavbarBmes = (props: Props) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="bmes__navbar">
      <div className={`nav__items ${open && "open"}`}>
        <NavLink
          className={({ isActive }) =>
            isActive ? "active__nav__item" : "nav__item"
          }
          to={"/"}
        >
          Acceuil
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "active__nav__item" : "nav__item"
          }
          to={"/services"}
        >
          Services
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "active__nav__item" : "nav__item"
          }
          to={"/about"}
        >
          A Propos
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "active__nav__item" : "nav__item"
          }
          to={"/contact"}
        >
          Contactez-nous
        </NavLink>
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
