import { HTMLAttributes, useState } from "react";
import "../../_dist/CardBmes.css";
interface CardProps extends HTMLAttributes<HTMLDivElement> {}

const CardBmes = ({ ...props }: CardProps) => {
  return (
    <div {...props} className="bmes__service_card">
      {props.children}
    </div>
  );
};

export default CardBmes;
