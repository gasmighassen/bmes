import React, { useEffect, useState } from "react";
import "../../_dist/PortfolioImgCard.css";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { imagesActionCreator } from "../../redux";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { ImagesState } from "../../redux/reducers/imagesReducer";
import { Image } from "../../redux/types/types";
import { CloseOutlined } from "@ant-design/icons";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
type Props = {};

const PortfolioImgCard = (props: Props) => {
  const [openModal, setOpenModal] = useState(false);
  const [activeImage, setActiveImage] = useState<number>();
  const serviceParam = useParams();
  const dispatch = useDispatch();
  const { getImages } = bindActionCreators(imagesActionCreator, dispatch);
  const gallery = useSelector((state: any) => state.images.images);
  const handleActiveImage = (element) => {
    setActiveImage(element);
    setOpenModal(true);
  };
  useEffect(() => {
    getImages();

    return () => {};
  }, []);
  const serviceFolderMap: { [key: string]: string } = {
    Etude_et_conception: "bmes_service_1",
    Solutions_Techniques: "bmes_service_2",
    Contrôle_de_qualité_et_suivi_du_chantier: "bmes_service_3",
    Exécution: "bmes_service_4",
    Autres_Services: "bmes_service_5",
  };

  // Get the corresponding folder name based on the service
  const folderName = serviceFolderMap[serviceParam.service];

  // Filter images based on the folder name
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
        <div className="bmes_portfolio_images_caroussel">
          <div className="close_caroussel_portfolio">
            <CloseOutlined  onClick={() => setOpenModal(false)} />
            <Carousel
              autoPlay={false}
              animation={"fade"}
              swipe={false}
              navButtonsAlwaysVisible
              index={activeImage}
            >
              {filteredImages.map((item: Image, i: number) => (
                <div className="bmes_active_portfolio_image">
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
