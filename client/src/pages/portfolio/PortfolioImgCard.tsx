import React, { useEffect, useState, useRef } from "react";
import "../../_dist/PortfolioImgCard.css";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { imagesActionCreator } from "../../redux";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { Image } from "../../redux/types/types";
import {
  CloseOutlined,
  ZoomInOutlined,
  ZoomOutOutlined,
} from "@ant-design/icons";
import Carousel from "react-material-ui-carousel";

type Props = {};

const PortfolioImgCard = (props: Props) => {
  const [openModal, setOpenModal] = useState(false);
  const [activeImage, setActiveImage] = useState<number>();
  const [zoomed, setZoomed] = useState(true);
  const modalRef = useRef<HTMLDivElement>(null);

  const serviceParam = useParams();
  const dispatch = useDispatch();
  const { getImages } = bindActionCreators(imagesActionCreator, dispatch);
  const gallery = useSelector((state: any) => state.images.images);
  console.log(gallery);
  const handleActiveImage = (element: number) => {
    setActiveImage(element);
    setOpenModal(true);
  };
  const imageCountPlus = (count: number) => {
    if (count !== undefined && count < filteredImages.length - 1) {
      setActiveImage((prev) => prev + 1);
    } else {
      setActiveImage(0);
    }
  };
  const imageCountMinus = (count: number) => {
    if (count > 0 && count <= filteredImages.length) {
      setActiveImage((prev) => prev - 1);
    } else {
      setActiveImage(filteredImages.length - 1);
    }
  };
  useEffect(() => {
    getImages();

    const handleScroll = (event: WheelEvent) => {
      if (modalRef.current && modalRef.current.contains(event.target as Node)) {
        const deltaY = event.deltaY;
        if (deltaY > 0) {
          imageCountMinus(activeImage);
        } else if (deltaY < 0) {
          imageCountPlus(activeImage);
        }
      }
    };

    if (openModal) {
      window.addEventListener("wheel", handleScroll);
    }

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [openModal, activeImage]);

  const serviceFolderMap: { [key: string]: string } = {
    Plomberie: "Plomberie",
    electricité: "electricité",
    exécution: "exécution",
    structure: "structure",
    intérieur: "intérieur",
    exterieur: "exterieur",
  };

  const folderName = serviceFolderMap[serviceParam.service];
  console.log(folderName);
  const filteredImages = gallery.filter(
    (el: Image) => el.folder === folderName
  );
  console.log(filteredImages);
  return (
    <>
      {" "}
      <div className="bmes_service_portfolio">
        {filteredImages.map((el: Image, index: number) => (
          <div key={index} className="bmes_service_portfolio_images">
            {el.format === "jpg" ? (
              <img
                className="bmes_img"
                src={el.secure_url}
                alt=""
                loading="lazy"
                onClick={() => handleActiveImage(index)}
              />
            ) : (
              <div className="bmes_vedio_portfolio">
                <div
                  className="bmes_video_overlay"
                  onClick={() => handleActiveImage(index)}
                ></div>
                <iframe frameBorder={0} allowFullScreen src={el.secure_url} />
              </div>
            )}
          </div>
        ))}
      </div>{" "}
      {openModal && (
        <div
          className="bmes_portfolio_images_caroussel animate__animated animate__zoomIn"
          ref={modalRef}
        >
          <div className="close_caroussel_portfolio">
            <div className="modal__menu">
              <CloseOutlined onClick={() => setOpenModal(false)} />
              {!zoomed ? (
                <ZoomOutOutlined onClick={() => setZoomed((prev) => !prev)} />
              ) : (
                <ZoomInOutlined onClick={() => setZoomed((prev) => !prev)} />
              )}
              <span>
                {activeImage + 1}/{filteredImages.length}
              </span>
            </div>

            <Carousel
              autoPlay={false}
              animation={"fade"}
              duration={700}
              swipe={false}
              navButtonsAlwaysVisible
              index={activeImage}
              next={() => {
                setZoomed((prev) => prev);
                imageCountPlus(activeImage);
              }}
              prev={() => {
                setZoomed((prev) => prev);
                imageCountMinus(activeImage);
              }}
            >
              {filteredImages.map((item: Image, i: number) => (
                <div
                  className={
                    zoomed
                      ? "bmes_active_portfolio_image"
                      : "bmes_active_portfolio_image zoomed_in"
                  }
                >
                  {item.format === "jpg" ? (
                    <img key={i} src={item.secure_url} />
                  ) : (
                    <iframe
                      className="bmes_vedio_portfolio"
                      frameBorder={0}
                      allowFullScreen
                      src={item.secure_url}
                    />
                  )}
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      )}
    </>
  );
};

export default PortfolioImgCard;
