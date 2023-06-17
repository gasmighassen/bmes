import React, { HTMLAttributes } from "react";
import "../../_dist/ServiceSection.css";
interface IServiceProps extends HTMLAttributes<HTMLDivElement> {
  banner?: string;
  media?: string;
}

const ServiceSection = ({ banner, media, ...props }: IServiceProps) => {
  return (
    <div id={props.id} className="bmes__service__details">
      <div className="bmes__service__banner">
        {banner ? <img src={banner} alt="" /> : null}
      </div>
      <div className="bmes__service__content">
        <div className="bmes__service__text_details">{props.children}</div>
        <div className="bmess__service__media">
          {media ? (
            <iframe
              src={media}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
