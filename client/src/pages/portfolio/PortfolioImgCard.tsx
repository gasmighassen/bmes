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
  const [zoomed, setZoomed] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const serviceParam = useParams();
  const dispatch = useDispatch();
  const { getImages } = bindActionCreators(imagesActionCreator, dispatch);
  const gallery = useSelector((state: any) => state.images.images);
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
    Etude_et_conception: "bmes_service_1",
    Solutions_Techniques: "bmes_service_2",
    Contrôle_de_qualité_et_suivi_du_chantier: "bmes_service_3",
    Exécution: "bmes_service_4",
    Autres_Services: "bmes_service_5",
  };

  const folderName = serviceFolderMap[serviceParam.service];

  const filteredImages = gallery.filter(
    (el: Image) => el.folder === folderName
  );
  return (
    <>
      {" "}
      <div className="bmes_service_portfolio">
        {filteredImages.map((el: Image, index: number) => (
          <div key={index} className="bmes_service_portfolio_images">
            {el.format === "jpg" ? (
              <img
                src={el.secure_url}
                alt=""
                loading="lazy"
                onClick={() => handleActiveImage(index)}
              />
            ) : (
              <iframe
                className="bmes_vedio_portfolio"
                frameBorder={0}
                allowFullScreen
                src={el.secure_url}
              />
            )}
          </div>
        ))}
      </div>{" "}
      {openModal && (
        <div className="bmes_portfolio_images_caroussel" ref={modalRef}>
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
                  <img key={i} src={item.secure_url} />
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
