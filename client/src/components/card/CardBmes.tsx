import { HTMLAttributes, useState } from "react";
import "../../_dist/Services.css";
interface CardProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  readless: string;
  readmore: string;
  src: string;
}

const CardBmes = ({ title, readless, readmore, src, ...props }: CardProps) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <div {...props} className="bmes__service">
      <div className="bmes__service__detail">
        <h1 className="bmes__service_title">{title}</h1>
        <p>
          {readless}
          <span className={readMore ? "" : "hide_text"}>{readMore}</span>
          <p className="savoir__plus" onClick={() => console.log("read more")}>
            Savoir plus
          </p>
        </p>
      </div>
      <div className="bmes__service__image">
        <img src={src} alt="" />
      </div>
    </div>
  );
};

export default CardBmes;
