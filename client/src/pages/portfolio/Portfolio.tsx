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
          service="Etude et conception"
        />
        <CategoryCard
          media="/images/caroussel-image-2.jpg"
          service="Solutions Techniques"
        />
        <CategoryCard
          media="/images/caroussel-image-3.jpg"
          service=" Contrôle de qualité et suivi du chantier"
        />
        <CategoryCard
          media="/images/caroussel-image-4.jpg"
          service="Exécution"
        />
        <CategoryCard
          media="/images/caroussel-image-5.jpg"
          service="Autres Services"
        />
      </div>
    </div>
  );
};

export default Portfolio;
