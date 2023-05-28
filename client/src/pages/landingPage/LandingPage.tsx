import React from "react";
import NavbarBmes from "../../components/navbar/NavbarBmes";
import "../../_dist/LandingBmes.css";
type Props = {};

const LandingPage = (props: Props) => {
  return (
    <div className="bmes-landing">
      <div className="slougan-bmes">
        <div className="slougan-text">
          <p>
            Une nouvelle 
            <span className="bmes-blue"> perspective</span>
            <br></br> pour une meilleure{" "}
            <span className="bmes-blue">construction</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
