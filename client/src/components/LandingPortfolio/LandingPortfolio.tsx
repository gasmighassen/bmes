import React, { useState } from "react";
import "../../_dist/LandingPortfolio.css";
import { portfolioImages } from "../../data/PortfolioLandingImages";
type Props = {};

const LandingPortfolio = (props: Props) => {
  const [mainImg, setMainImg] = useState(portfolioImages[0].url);
  return (
    <div className="bmes__landing__portfolio__section">
      <h1 className="bmes__pourquoi">Nos Projets</h1>
      <div className="bmes__landing__portfolio_wrapper">
        {" "}
        <div className="bmes__landing__portfolio__main_image">
          <img src={mainImg} alt="" />
        </div>
        <div className="bmes__landing__portfolio__thumbnails">
          {portfolioImages.map((image) => (
            <div key={image.id} className="bmes__landing__thumbnail">
              <img
                src={image.url}
                alt=""
                onClick={() => setMainImg(image.url)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingPortfolio;
