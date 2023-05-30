import "../../_dist/Footer.css";
import {
  FacebookFilled,
  InstagramOutlined,
  LinkedinFilled,
  TwitterOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="bmes__footer">
      <div className="bmes__footer_details">
        <div className="bmes__footer__item">
          <p>Gabes,Tunisia</p>
          <p>+216 00 000 000</p>
          <Link to={"/"}>example@example.com</Link>
        </div>
        <div className="social__media">
          <FacebookFilled />
          <InstagramOutlined />
          <LinkedinFilled />
          <TwitterOutlined />
        </div>
        <div className="bmes__footer__item">
          <Link to={"/"}>Accueil</Link>
          <Link to={"/services"}>Services</Link>
          <Link to={"/about"}>A Propos</Link>
          <Link to={"/contact"}>Contactez-nous</Link>
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
