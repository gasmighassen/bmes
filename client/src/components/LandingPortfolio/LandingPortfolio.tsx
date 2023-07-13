import React, { useEffect, useRef, useState } from "react";
import "../../_dist/LandingPortfolio.css";
import { portfolioImages } from "../../data/PortfolioLandingImages";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useNavigate } from "react-router-dom";

type Props = {};

const LandingPortfolio = (props: Props) => {
  const [images, setImages] = useState(portfolioImages);
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideImage, setSlideImage] = useState(images[activeIndex]);
  const splideRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const splideInstance = splideRef.current.splide;
    splideInstance.on("active", handleSlideChange);

    return () => {
      splideInstance.off("active", handleSlideChange);
    };
  }, []);

  const handleSlideChange = (splide) => {
    const index = splide.index;
    setActiveIndex(index);
    setSlideImage(images[index]);
  };

  return (
    <div className="bmes__landing__portfolio__section">
      <h1 className="bmes__pourquoi">Nos Projets</h1>
      <div className="portfolio__main_image">
        <img
          src={slideImage.url}
          alt=""
          loading="lazy"
          onClick={() => navigate("/portfolio")}
        />
      </div>
      <div className="bmes__portfolio_container">
        <Splide ref={splideRef}>
          {images.map((image, index) => (
            <SplideSlide
              className={`${index === activeIndex ? "active_thumb" : ""}`}
              key={index}
            >
              <img
                src={image.url}
                alt={`Image ${index}`}
                loading="lazy"
                onClick={() => splideRef.current.splide.go(index)}
              />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

export default LandingPortfolio;
