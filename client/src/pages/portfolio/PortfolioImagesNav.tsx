import React, { useState } from "react";
import "../../_dist/PortfolioImagesNav.css";
import { Link } from "react-router-dom";
import { SwitcherOutlined } from "@ant-design/icons";
const PortfolioImagesNav = () => {
  const [openServiceNav, setOpenServiceNav] = useState(false);
  return (
    <div className="portfolio__nav_container">
      <div
        className="toggle_portfolio_nav"
        onClick={() => setOpenServiceNav(!openServiceNav)}
      ></div>
      <div className={openServiceNav ? "portfolio_nav  open" : "portfolio_nav"}>
        <Link
          to={"/Plomberie"}
          onClick={() => setOpenServiceNav(!openServiceNav)}
        >
          Plomberie
        </Link>
        <Link
          to={"/exterieur"}
          onClick={() => setOpenServiceNav(!openServiceNav)}
        >
          exterieur
        </Link>
        <Link
          to={"/intérieur"}
          onClick={() => setOpenServiceNav(!openServiceNav)}
        >
          intérieur
        </Link>
        <Link
          to={"/Exécution"}
          onClick={() => setOpenServiceNav(!openServiceNav)}
        >
          Exécution
        </Link>
        <Link
          to={"/Autres_Services"}
          onClick={() => setOpenServiceNav(!openServiceNav)}
        >
          Autres Services
        </Link>
      </div>
    </div>
  );
};

export default PortfolioImagesNav;
