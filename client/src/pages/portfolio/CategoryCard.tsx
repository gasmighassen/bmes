import React from "react";
import "../../_dist/CategoryCard.css";
type Props = {
  media: string;
  service: string;
};

const CategoryCard = ({ media, service }: Props) => {
  return (
    <div className="bmes_category_card">
      <img src={media} alt="" />
      <div className="bmes_category_details">
        {" "}
        <h3>{service}</h3>
        <button className="btn-outline-white">Plus d'images</button>
      </div>
    </div>
  );
};

export default CategoryCard;
