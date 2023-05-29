import React from "react";
import "../../_dist/Footer.css";
import {
  FacebookFilled,
  InstagramOutlined,
  LinkedinFilled,
  TwitterOutlined,
} from "@ant-design/icons";
type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="bmes__footer">
      <div className="bmes__footer_details">
        <div className="bmes__footer__item">
          <p>Gabes,Tunisia</p>
          <p>+216 00 000 000</p>
          <a href="">example@example.com</a>
        </div>
        <div className="social__media">
          <FacebookFilled />
          <InstagramOutlined />
          <LinkedinFilled />
          <TwitterOutlined />
        </div>
        <div className="bmes__footer__item">
          <a href="">Accueil</a>
          <a href="">Services</a>
          <a href="">A Propos</a>
          <a href="">Contactez-nous</a>
        </div>
      </div>

      <div className="copyrights">
        <p>&copy;2023 Ben Mouhamed Etude Et Services</p>
        <p>Created By Ghassen Gasmi</p>
      </div>
    </div>
  );
};

export default Footer;
