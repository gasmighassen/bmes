import "../../_dist/ServiceCards.css";
import ServiceCard from "../card/ServiceCard";

import ButtonBmes from "../button/ButtonBmes";
import { useNavigate } from "react-router-dom";
type Props = {};

const ServiceCards = (props: Props) => {
  const navigate = useNavigate();
  return (
    <div className="bmes__services_section">
      <h1 className="service_title">Nos services</h1>
      <div className="bmes__service__cards">
        <ServiceCard>
          <div className="bmes__service__card_text">
            <h1>Études et Conceptions</h1>
            <img className="bmes__card__icon" src="/images/vector.png" alt="" />
          </div>
          <div className="bmes__card__text">
            <p>
              "BMES conçoit et analyse les projets de construction, réalisant
              des plans et des détails structuraux, alliant créativité visuelle
              et solidité pour des résultats remarquables, en collaboration avec
              les architectes."
            </p>
          </div>

          <div className="bmes__service__card_readmore">
            <ButtonBmes onClick={() => navigate("/services")}>
              En savoir plus
            </ButtonBmes>
          </div>
        </ServiceCard>
        <ServiceCard>
          <div className="bmes__service__card_text">
            <h1>Solutions Techniques</h1>
            <img
              className="bmes__card__icon"
              src="/images/target-02.png"
              alt=""
            />
          </div>
          <div className="bmes__card__text">
            <p>
              BMES propose des solutions techniques adaptées aux problèmes
              rencontrés sur les matériaux ou les structures, basées sur un
              diagnostic complet des désordres."
            </p>
          </div>

          <div className="bmes__service__card_readmore">
            <ButtonBmes onClick={() => navigate("/services")}>
              En savoir plus
            </ButtonBmes>
          </div>
        </ServiceCard>
        <ServiceCard>
          <div className="bmes__service__card_text">
            <h1>Contrôle et suivi du chantier</h1>
            <img className="bmes__card__icon" src="/images/gear.png" alt="" />
          </div>
          <div className="bmes__card__text">
            <p>
              BMES assure la coordination et la supervision des chantiers. Des
              mesures sont mises en place, telles que le contrôle de la qualité
              des travaux et la correction des problèmes, pour satisfaire nos
              clients.
            </p>
          </div>

          <div className="bmes__service__card_readmore">
            <ButtonBmes onClick={() => navigate("/services")}>
              En savoir plus
            </ButtonBmes>
          </div>
        </ServiceCard>
        <ServiceCard>
          <div className="bmes__service__card_text">
            <h1> Exécution</h1>
            <img
              className="bmes__card__icon"
              src="/images/vector-3.png"
              alt=""
            />
          </div>
          <div className="bmes__card__text">
            <p>
              BMES fait appel à des entreprises qualifiées et sélectionnées sur
              des critères rigoureux dans chaque corps de métier. Nos
              constructions sont avant tout le résultat d’une collaboration
              parfaite entre nos équipes internes et les artisans.
            </p>
          </div>

          <div className="bmes__service__card_readmore">
            <ButtonBmes onClick={() => navigate("/services")}>
              En savoir plus
            </ButtonBmes>
          </div>
        </ServiceCard>
        <ServiceCard>
          <div className="bmes__service__card_text">
            <h1>Autres Service</h1>
            <img
              className="bmes__card__icon"
              src="/images/vector-2.png"
              alt=""
            />
          </div>
          <div className="bmes__card__text">
            <p>
              "BMES conçoit et analyse les projets de construction, réalisant
              des plans et des détails structuraux, alliant créativité visuelle
              et solidité pour des résultats remarquables, en collaboration avec
              les architectes."
            </p>
          </div>

          <div className="bmes__service__card_readmore">
            <ButtonBmes onClick={() => navigate("/services")}>
              En savoir plus
            </ButtonBmes>
          </div>
        </ServiceCard>
      </div>
    </div>
  );
};

export default ServiceCards;
