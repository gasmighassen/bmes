import React, { useState } from "react";
import "../../_dist/CategoryCard.css";
import { useNavigate } from "react-router-dom";
type Props = {
  media: string;
  service: string;
};

const CategoryCard = ({ media, service }: Props) => {
  const navigate = useNavigate();
  const replaced = service.replaceAll(" ", "_");
  const handleSelectedService = () => {
    navigate(`/${replaced}`);
  };
  return (
    <div className="bmes_category_card">
      <img src={media} alt="" loading="lazy" />
      <div className="bmes_category_details">
        {" "}
        <h3>{service}</h3>
        <button className="btn-outline-white" onClick={handleSelectedService}>
          Plus d'images
        </button>
      </div>
    </div>
  );
};

export default CategoryCard;
