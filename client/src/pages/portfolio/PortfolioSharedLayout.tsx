import React from "react";
import PortfolioImagesNav from "./PortfolioImagesNav";
import { Outlet } from "react-router-dom";
import Footer from "../../components/footer/Footer";

const PortfolioSharedLayout = () => {
  return (
    <div className="bmes_service_portfolio_container">
      <PortfolioImagesNav />
      <Outlet />
    </div>
  );
};

export default PortfolioSharedLayout;
