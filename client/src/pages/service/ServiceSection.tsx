import React, { HTMLAttributes } from "react";
import "../../_dist/ServiceSection.css";
import YouTube, { YouTubeProps } from "react-youtube";

interface IServiceProps extends HTMLAttributes<HTMLDivElement> {
  banner?: string;
  media?: string;
}

const ServiceSection = ({ banner, media, ...props }: IServiceProps) => {
  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    if (event.target) {
      event.target.pauseVideo();
    }
  };

  const opts: YouTubeProps["opts"] = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div id={props.id} className="bmes__service__details">
      <div className="bmes__service__banner">
        {banner && <img src={banner} alt="" />}
      </div>
      <div className="bmes__service__content">
        <div className="bmes__service__text_details">{props.children}</div>
        <div className="bmess__service__media">
          {media && (
            <YouTube videoId={media} opts={opts} onReady={onPlayerReady} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
