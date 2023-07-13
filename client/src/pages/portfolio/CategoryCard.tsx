import React, { HTMLAttributes, useState } from "react";
import "../../_dist/CategoryCard.css";
import { useNavigate } from "react-router-dom";
interface Props extends HTMLAttributes<HTMLDivElement> {
  media: string;
  service: string;
  animate?: string;
}

const CategoryCard = ({ animate, media, service }: Props) => {
  const navigate = useNavigate();
  const replaced = service.replaceAll(" ", "_");
  const handleSelectedService = () => {
    navigate(`/${replaced}`);
  };
  return (
    <div className={`bmes_category_card animate__animated ${animate}`}>
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
