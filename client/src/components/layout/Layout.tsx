import React from "react";
import NavbarBmes from "../navbar/NavbarBmes";
import { Outlet } from "react-router-dom";
import "../../_dist/App.css";
import Footer from "../footer/Footer";

type Props = {};

const Layout = (props: Props) => {
  return (
    <section id="bmes__main">
      <NavbarBmes />
      <div className="bmes__outlet">
        <Outlet />
      </div>
      <Footer />
    </section>
  );
};

export default Layout;
