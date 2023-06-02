import "../../_dist/LandingBmes.css";
import CarousselBmes from "../../components/caroussel/CarousselBmes";
import "animate.css";
import CardBmes from "../../components/card/CardBmes";
import ServiceCards from "../../components/serviceCards/ServiceCards";
import LandingPortfolio from "../../components/LandingPortfolio/LandingPortfolio";
import BmesMap from "../../components/map/BmesMap";
type Props = {};

const LandingPage = (props: Props) => {
  return (
    <div className="bmes-landing">
      <div className="bmes__upper__caroussel">
        <CarousselBmes autoplay interval={7000}>
          <div className="bmes__landing__caroussel__item">
            <img src="/images/1.jpg" alt="" />
          </div>
          <div className="bmes__landing__caroussel__item">
            <img src="/images/2.jpg" alt="" />
          </div>
          <div className="bmes__landing__caroussel__item">
            <img src="/images/3.jpg" alt="" />
          </div>
          <div className="bmes__landing__caroussel__item">
            <img src="/images/4.jpg" alt="" />
          </div>
        </CarousselBmes>
      </div>
      <div className="bmes__who_are_we">
        <h1 className="animate__fadeInDown animate__animated">
          L'entreprise idéale pour votre maison
        </h1>
        <div className="bmes__who__are_we_text animate__fadeInDown animate__animated">
          <span>Ben Mohamed études et services (BMES)</span>
          <p>
            est une entreprise spécialisée dans la conception et construction
            des bâtiments dès le permis de bâtir jusqu'au rangement des meubles.
          </p>
        </div>
        <div className="bmes__who__are_we_text animate__fadeInDown animate__animated">
          <span>Ben Mohamed études et services (BMES)</span>
          <p>
            sert à vous fournir des études structurales et architecturales afin
            de prévoir des solutions techniques selon votre budget.
          </p>
        </div>
        <div className="bmes__who__are_we_text animate__fadeInDown animate__animated">
          <span>Ben Mohamed études et services (BMES)</span>
          <p>
            propose à ses clients divers services dans des différents domaines
            tels que l’électricité, la plomberie …, le peintre et la décoration
            d'intérieur
          </p>
        </div>
      </div>
      <div className="bmes__landing__cards">
        <CardBmes className="animate__animated animate__delay-1s animate__bounceIn">
          <img src="/images/1.jpg" alt="" />
          <div className="overlay__card">
            <h1>Tous les services liés au bâtiment en un seul endroit.</h1>
          </div>
        </CardBmes>
        <CardBmes className="animate__animated  animate__delay-2s animate__bounceIn">
          <img src="/images/2.jpg" alt="" />
          <div className="overlay__card">
            {" "}
            <h1>Modération et bon déroulement du chantier.</h1>
          </div>
        </CardBmes>
        <CardBmes className="animate__animated animate__delay-3s animate__bounceIn">
          <img src="/images/3.jpg" alt="" />
          <div className="overlay__card">
            {" "}
            <h1>Consultation et guide total.</h1>
          </div>
        </CardBmes>
      </div>

      <ServiceCards />
      <LandingPortfolio />
      <BmesMap />
    </div>
  );
};

export default LandingPage;
