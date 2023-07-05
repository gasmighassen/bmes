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
          to={"/Etude_et_conception"}
          onClick={() => setOpenServiceNav(!openServiceNav)}
        >
          Etude et conception
        </Link>
        <Link
          to={"/Solutions_Techniques"}
          onClick={() => setOpenServiceNav(!openServiceNav)}
        >
          Solutions Techniques
        </Link>
        <Link
          to={"/Contrôle_de_qualité_et_suivi_du_chantier"}
          onClick={() => setOpenServiceNav(!openServiceNav)}
        >
          Contrôle de qualité et suivi du chantier
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
