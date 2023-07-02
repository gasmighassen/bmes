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
      <h3>{service}</h3>
      <button>Plus</button>
    </div>
  );
};

export default CategoryCard;
