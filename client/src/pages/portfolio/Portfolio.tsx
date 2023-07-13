import React from "react";
import "../../_dist/Portfolio.css";
import CategoryCard from "./CategoryCard";
type Props = {};

const Portfolio = (props: Props) => {
  return (
    <div className="bmes__portfolio_page">
      <div className="bmes__portfolio_header">
        <h1>Projets Gallery</h1>
      </div>
      <div className="bmes__portfolio_categories">
        <CategoryCard
          media="/images/caroussel-image-1.jpg"
          service="Plomberie"
          animate="animate__slideInLeft"
        />
        <CategoryCard
          media="/images/caroussel-image-2.jpg"
          service="exterieur"
          animate="animate__slideInDown"
        />
        <CategoryCard
          media="/images/caroussel-image-3.jpg"
          service="intérieur"
          animate="animate__slideInRight"
        />
        <CategoryCard
          media="/images/caroussel-image-4.jpg"
          service="Exécution"
          animate="animate__slideInUp"
        />
        <CategoryCard
          media="/images/caroussel-image-5.jpg"
          service="Autres Services"
          animate="animate__slideInUp"
        />
      </div>
    </div>
  );
};

export default Portfolio;
