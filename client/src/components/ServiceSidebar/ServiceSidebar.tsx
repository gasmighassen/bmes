import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../../_dist/ServiceSidebar.css";

type Props = {};

const ServiceSidebar = (props: Props) => {
  const [icon, setIcon] = useState("service1");
  const scrollIntoView = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleLinkClick = (id: string) => () => {
    scrollIntoView(id);
    setIcon(id);
  };

  return (
    <div className="bmes__service__sidebar">
      <div className="bmes_sidebar_container">
        <div className="bmes__sidebar__icon">
          <img src={`/images/services_icon/${icon}.png`} alt="" />
        </div>

        <ul className="bmes__sidebar_items">
          <li className="bmes__sidebar_item ">
            <NavLink onClick={handleLinkClick("service1")} to="/services">
              Etude et Conceptions
            </NavLink>
          </li>
          <li className="bmes__sidebar_item">
            <NavLink
              onClick={handleLinkClick("service2")}
              to="/services"
              className={({ isActive }) => (isActive ? "active_service" : "")}
            >
              Solution Techniques
            </NavLink>
          </li>
          <li className="bmes__sidebar_item">
            <NavLink
              onClick={handleLinkClick("service3")}
              to="/services"
              className={({ isActive }) => (isActive ? "active_service" : "")}
            >
              Contrôle de Qualité
            </NavLink>
          </li>
          <li className="bmes__sidebar_item">
            <NavLink
              onClick={handleLinkClick("service4")}
              to="/services"
              className={({ isActive }) => (isActive ? "active_service" : "")}
            >
              Réalisation
            </NavLink>
          </li>
          <li className="bmes__sidebar_item">
            <NavLink
              onClick={handleLinkClick("service5")}
              to="/services"
              className={({ isActive }) => (isActive ? "active_service" : "")}
            >
              Autre
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ServiceSidebar;
