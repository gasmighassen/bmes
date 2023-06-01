import React from "react";
import "../../_dist/ServiceCards.css";
import ServiceCard from "../card/ServiceCard";
import {
  BuildOutlined,
  BulbOutlined,
  ControlOutlined,
  LikeOutlined,
  ToolOutlined,
} from "@ant-design/icons";
import ButtonBmes from "../button/ButtonBmes";
type Props = {};

const ServiceCards = (props: Props) => {
  return (
    <div className="bmes__services_section">
      <h1>Nous service</h1>
      <div className="bmes__service__cards">
        <ServiceCard>
          <div className="bmes__service__card_text">
            <h1>Études et Conceptions</h1>
            <p>
              "BMES conçoit et analyse les projets de construction, réalisant
              des plans et des détails structuraux, alliant créativité visuelle
              et solidité pour des résultats remarquables, en collaboration avec
              les architectes."
            </p>
          </div>
          <div className="bmes__card__lower">
            <div className="bmes__service__card_icon">
              <BulbOutlined className="bmes__card__icon" />
            </div>
            <div className="bmes__service__card_readmore">
              <ButtonBmes>En savoir plus</ButtonBmes>
            </div>
          </div>
        </ServiceCard>
        <ServiceCard>
          <div className="bmes__service__card_text">
            <h1>Solutions Techniques</h1>
            <p>
              La durabilité d'un ouvrage dépend de la conception, des matériaux,
              de la réalisation, des conditions d'utilisation, et le béton peut
              nécessiter des réparations ou renforcements ; BMES propose des
              solutions techniques pour résoudre les problèmes potentiels
              rencontrés sur les matériaux et les structures, après un
              diagnostic précis des désordres.
            </p>
          </div>
          <div className="bmes__card__lower">
            <div className="bmes__service__card_icon">
              <LikeOutlined className="bmes__card__icon" />
            </div>
            <div className="bmes__service__card_readmore">
              <ButtonBmes>En savoir plus</ButtonBmes>
            </div>
          </div>
        </ServiceCard>
        <ServiceCard>
          <div className="bmes__service__card_text">
            <h1>Contrôle de qualité et suivi</h1>
            <p>
              BMES assure une gestion complète des travaux, de l'ouverture du
              chantier à la remise des clés, en veillant au bon déroulement des
              travaux et en anticipant pour une construction réussie. Le respect
              des délais et un suivi en temps réel de l'organisation des
              chantiers sont des priorités pour BMES, qui met en place des
              actions telles que le contrôle de la qualité des travaux et des
              mesures correctives pour satisfaire les clients.
            </p>
          </div>
          <div className="bmes__card__lower">
            <div className="bmes__service__card_icon">
              <ControlOutlined className="bmes__card__icon" />
            </div>
            <div className="bmes__service__card_readmore">
              <ButtonBmes>En savoir plus</ButtonBmes>
            </div>
          </div>
        </ServiceCard>
        <ServiceCard>
          <div className="bmes__service__card_text">
            <h1>Réalisation</h1>
            <p>
              BMES fait appel à des entreprises qualifiées dans chaque corps de
              métier. Ces artisans sont sélectionnés sur des critères rigoureux
              comme les qualifications, l’expérience de leurs équipes et les
              assurances dont dispose l’entreprise. Nos constructions sont avant
              tout le résultat d’une collaboration parfaite entre nos équipes
              internes et les artisans.
            </p>
          </div>
          <div className="bmes__card__lower">
            <div className="bmes__service__card_icon">
              <BuildOutlined className="bmes__card__icon" />
            </div>
            <div className="bmes__service__card_readmore">
              <ButtonBmes>En savoir plus</ButtonBmes>
            </div>
          </div>
        </ServiceCard>
        <ServiceCard>
          <div className="bmes__service__card_text">
            <h1>Lots spéciaux</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea quas
              voluptatibus ducimus, debitis nobis fuga quasi, obcaecati, a
              soluta magni porro vero id consequatur explicabo dignissimos
              facere. Corporis aliquid odit adipisci iste minima fuga vero
              voluptate consequuntur atque, in optio itaque aperiam ad deleniti
              ratione facere facilis repellendus nam dicta.
            </p>
          </div>
          <div className="bmes__card__lower">
            <div className="bmes__service__card_icon">
              <ToolOutlined className="bmes__card__icon" />
            </div>
            <div className="bmes__service__card_readmore">
              <ButtonBmes>En savoir plus</ButtonBmes>
            </div>
          </div>
        </ServiceCard>
      </div>
    </div>
  );
};

export default ServiceCards;
