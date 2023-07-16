import "../../_dist/LandingBmes.css";
import CarousselBmes from "../../components/caroussel/CarousselBmes";
import "animate.css";
import CardBmes from "../../components/card/CardBmes";
import ServiceCards from "../../components/serviceCards/ServiceCards";
import LandingPortfolio from "../../components/LandingPortfolio/LandingPortfolio";
import BmesMap from "../../components/map/BmesMap";
import Footer from "../../components/footer/Footer";
import ButtonBmes from "../../components/button/ButtonBmes";
import { useNavigate } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
type Props = {};

const LandingPage = (props: Props) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const navigate = useNavigate();
  return (
    <div className="bmes-landing">
      <div className="bmes__upper__caroussel">
        <CarousselBmes autoplay interval={10000}>
          <div className="bmes__landing__caroussel__item">
            <img src="/images/1-1.jpg" alt="" />
            <div className="overLay__bmes animate__animated animate__bounceInLeft">
              <h2>
                Une maison moderne, confortable et luxueuse est l'harmonie
                <span className="highlight"> IDÉALE</span> que nos experts
                jouent.
              </h2>
            </div>
          </div>
          <div className="bmes__landing__caroussel__item">
            <img src="/images/3.jpg" alt="" />
            <div className="overLay__bmes animate__animated animate__bounceInLeft">
              <h1>Obtenez une estimation gratuite !</h1>
              <h2>Tous les services du bâtiment en un seul endroit</h2>
            </div>
          </div>
          <div className="bmes__landing__caroussel__item">
            <img src="/images/4.jpg" alt="" />
            <div className="overLay__bmes animate__animated animate__bounceInLeft">
              <h1>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus,
                beatae.
              </h1>
            </div>
          </div>
          <div className="bmes__landing__caroussel__item">
            <img src="/images/1.jpg" alt="" />
            <div className="overLay__bmes animate__animated animate__bounceInLeft">
              <h1>Obtenez une estimation gratuite !</h1>
              <h2>
                Vous avez un projet de construction ou de rénovation ? Pour
                connaître le coût de votre projet, cliquez sur le bouton
                ci-dessous. Nos experts en services et études de construction et
                bâtiments sont prêts à vous aider.
              </h2>
              <ButtonBmes variant="tertiary" onClick={() => navigate("/devis")}>
                Demande Devis
              </ButtonBmes>
            </div>
          </div>
        </CarousselBmes>
      </div>
      <div className="bmes__who_are_we">
        <h1 className="">L'entreprise idéale pour votre maison</h1>
        <div className="bmes__who__are_we_text" data-aos="zoom-in-down">
          <span>Ben Mohamed études et services (BMES)</span>
          <p>
            est une entreprise spécialisée dans la conception et construction
            des bâtiments dès le permis de bâtir jusqu'au rangement des meubles.
          </p>
        </div>
        <div className="bmes__who__are_we_text" data-aos="zoom-in-down">
          <span>Ben Mohamed études et services (BMES)</span>
          <p>
            sert à vous fournir des études structurales et architecturales afin
            de prévoir des solutions techniques selon votre budget.
          </p>
        </div>
        <div className="bmes__who__are_we_text" data-aos="zoom-in-down">
          <span>Ben Mohamed études et services (BMES)</span>
          <p>
            propose à ses clients divers services dans des différents domaines
            tels que l’électricité, la plomberie …, le peintre et la décoration
            d'intérieur
          </p>
        </div>
      </div>
      <h1 className="bmes__pourquoi">Pourquoi BMES ?</h1>
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
      <Footer />
    </div>
  );
};

export default LandingPage;
