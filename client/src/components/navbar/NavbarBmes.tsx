import { useEffect, useState } from "react";
import "../../_dist/NavBarBmes.css";
import { NavLink, useNavigate } from "react-router-dom";
import { LoginOutlined, SolutionOutlined } from "@ant-design/icons";
import { bindActionCreators } from "redux";
import { userActionCreator } from "../../redux";
import { useDispatch } from "react-redux";

type Props = {};

const NavbarBmes = (props: Props) => {
  const dispatch = useDispatch<any>();
  const { logout } = bindActionCreators(userActionCreator, dispatch);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [connected, setConnected] = useState(false);
  const isAuth = localStorage.getItem("token");

  useEffect(() => {
    if (isAuth) {
      setConnected(true);
    } else {
      setConnected(false);
    }
    console.log(connected);
    return () => {};
  }, [isAuth]);

  return (
    <div className="bmes__navbar">
      <div className="bmes__logo">
        <img
          src="/images/logo-bmes-01.svg"
          alt=""
          onClick={() => navigate("/")}
        />
      </div>
      <div className={`nav__items ${open && "open"}`}>
        <NavLink
          className={({ isActive }) =>
            isActive ? "active__nav__item" : "nav__item"
          }
          to={"/"}
        >
          Acceuil
        </NavLink>{" "}
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
          to={"/services"}
        >
          Services
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "active__nav__item" : "nav__item"
          }
          to={"/portfolio"}
        >
          Portfolio
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "active__nav__item devis" : "nav__item devis"
          }
          to={"/devis"}
        >
          <SolutionOutlined className="button_icon" /> Demande DEVIS
        </NavLink>{" "}
        <NavLink
          className={({ isActive }) =>
            isActive ? "active__nav__item connect" : "nav__item connect"
          }
          to={"/login"}
        >
          <LoginOutlined className="button_icon" /> Connecté
        </NavLink>
        <div className="bmes__nav_contact">
          {" "}
          <NavLink
            className={({ isActive }) =>
              isActive ? "active__nav__item" : "nav__item"
            }
            to={"/contact"}
          >
            Contactez-nous?
          </NavLink>
        </div>
      </div>

      <div
        className={`nav-toggle ${open && "open"}`}
        onClick={() => setOpen(!open)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default NavbarBmes;
