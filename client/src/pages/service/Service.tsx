import React, { useState } from "react";
import "../../_dist/Services.css";
import Divider from "../../components/divider/Divider";
import ReadMore from "../../components/readmore/ReadMore";

type Props = {};

const Service = (props: Props) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <div className="bmes__services">
      <div className="bmes__service">
        <ReadMore
          title="ÉTUDES ET CONCEPTIONS"
          text="BMES intervient dans la conception et l’analyse structurale des différents projets du bâtiment et du génie civil et réalise les plans d'exécutions et les détails à partir des dessins d'ensemble et des notes de calcul.Les ingénieurs en structure de BMES peuvent faire preuve de créativité pour concevoir une structure attrayante sur le plan visuel. Ils doivent également veiller à ce que la structure soit suffisamment solide pour supporter la charge prévue et pour l’usage auquel elle est destinée. BMES travaille en collaboration avec les architectes. Ces derniers sont chargés de concevoir les caractéristiques visuelles de vos projets - Avantages : Les ingénieurs en structures de BMES résolvent plusieurs problèmes. Leurs décisions affectent le projet entier : Coût, durée, sécurité et viabilité de votre bâtiment."
          maxLength={150}
        />
        <div className="bmes__service__image">
          <img src="/images/caroussel-image-1.jpg" alt="" />
        </div>
      </div>
      <Divider />
      <div className="bmes__service">
        <div className="bmes__service__image">
          <img src="/images/solution.jpg" alt="" />
        </div>
        <ReadMore
          title="Solutions Techniques"
          text="La durabilité d’un ouvrage dépend de nombreux paramètres dont la qualité de sa
          conception, des matériaux utilisés, de sa réalisation ainsi que des diverses
          conditions d’usage, d’exploitation et de maintenance. Le béton résiste au temps qu’il
          fait et au temps qui passe. Mais les ouvrages en béton peuvent nécessiter des
          opérations de réparation ou de renforcement pour augmenter leur durée d’utilisation
          ou offrir de nouvelles fonctionnalités.
          BMES assure diverses solutions techniques qui répondent à l’ensemble des
          problèmes potentiels rencontrés sur les matériaux ou sur les structures.
          
          Nous choisissons la solution technique adaptée à la pathologie à traiter, après un
          diagnostic complet et précis des désordres, de leurs causes et de leurs évolutions."
          maxLength={150}
        />
      </div>
      <Divider />
      <div className="bmes__service">
        <ReadMore
          title="Contrôle de qualité et suivi"
          text="Dès l’ouverture de votre chantier jusqu’à la remise des clés, BMES vous assure du
bon déroulement des travaux réalisés
Bien anticiper c’est mieux construire. Respecter les délais et suivre en temps réel
l’organisation de ses chantiers font partie des problématiques des professionnels du
génie civil en recherche de solutions pour superviser et coordonner leurs chantiers
efficacement.
Plusieurs actions, notamment sur le suivi des chantiers, ont été mises en place afin
de satisfaire les clients, comme le contrôle de la qualité des travaux et la mise en
œuvre d’actions correctives."
          maxLength={150}
        />
        <div className="bmes__service__image">
          <img src="/images/controle.jpg" alt="" />
        </div>
      </div>
      <Divider />
      <div className="bmes__service">
        <div className="bmes__service__image">
          <img src="/images/construction.jpg" alt="" />
        </div>
        <ReadMore
          title="Réalisation"
          text="BMES fait appel à des entreprises qualifiées dans chaque corps de métier.
Ces artisans sont sélectionnés sur des critères rigoureux comme les qualifications,
l’expérience de leurs équipes et les assurances dont dispose l’entreprise.
Nos constructions sont avant tout le résultat d’une collaboration parfaite entre nos
équipes internes et les artisans.
- Avantages :
Quelle que soit la taille de votre projet, BMES le traite avec une grande
importance. On fait des appels d’offres et grâce à notre base de données, on
contacte tous les sous-traitants pour vous apporter le moins-disant."
          maxLength={150}
        />
      </div>
      <Divider />
      <div className="bmes__service">
        <ReadMore
          title="Lots spéciaux"
          text="-La planification
-Le montage d’installations électriques de base dans le respect des normes techniques les
plus modernes qui soient, tant pour les travaux neufs que dans le cadre de travaux de
rénovation toute en respectant les règles de sécurité.

Plomberie et étanchéité :
-Tous types de travaux en plomberie-chauffage et ventilation en neuf ou rénovation
-Réalisation des études et des travaux associés, des dépannages, et la maintenance
d’installations dans le domaine de la tuyauterie industrielle, de la plomberie sanitaire, du
chauffage et du génie climatique.
Menuiseries bois et aluminium :
-Pose de fenêtres, portes fenêtre, portes, volets roulants, volets battants et coulissants,
menuiserie mixte bois-alu, murs rideaux, verrières, vérandas, brises soleil, garde-corps,
jalousies, moustiquaires, revêtements en panneaux composites (alucobond) en aluminium
ou en bois et de haute qualité.
Décoration et Peinture
-Nous vous apportons un architecte d&#39;intérieur qui vous réalisera des espaces intérieurs
esthétiques, confortables et fonctionnels en jouant avec les volumes, la lumière, le mobilier,
les couleurs et les matériaux en respectant vos souhaits et votre budget et une équipe de
professionnels en peinture pour l&#39;exécution."
          maxLength={150}
        />
        <div className="bmes__service__image">
          <img src="/images/solution.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Service;
