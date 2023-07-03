import React, { useEffect } from "react";
import "../../_dist/PortfolioImgCard.css";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { imagesActionCreator } from "../../redux";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { ImagesState } from "../../redux/reducers/imagesReducer";
import { Image } from "../../redux/types/types";
type Props = {};

const PortfolioImgCard = (props: Props) => {
  const serviceParam = useParams();
  const dispatch = useDispatch();
  const { getImages } = bindActionCreators(imagesActionCreator, dispatch);
  const gallery = useSelector((state: any) => state.images.images);

  useEffect(() => {
    getImages();

    return () => {};
  }, []);

  return (
    <div className="bmes_service_portfolio">
      {gallery.map((el: Image, index) => (
        <div key={index} className="bmes_service_portfolio_images">
          <img src={el.secure_url} alt="" loading="lazy" />
        </div>
      ))}
    </div>
  );
};

export default PortfolioImgCard;
