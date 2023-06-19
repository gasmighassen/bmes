import "../../_dist/Services.css";
import ServiceSection from "./ServiceSection";

type Props = {};

const Service = (props: Props) => {
  return (
    <div className="bmes__services">
      <ServiceSection
        id="service1"
        banner="/images/caroussel-image-1.jpg"
        media="https://www.youtube.com/embed/db6rapiuOhs"
      >
        <h1 className="service__title">Études et Conceptions</h1>
        <p className="service_paragraphe">
          BMES intervient dans la conception et l’analyse structurale des
          différents projets du bâtiment et du génie civil et réalise les plans
          d&#39;exécutions et les détails à partir des dessins d&#39;ensemble et
          des notes de calcul. Les ingénieurs en structure de BMES peuvent faire
          preuve de créativité pour concevoir une structure attrayante sur le
          plan visuel. Ils doivent également veiller à ce que la structure soit
          suffisamment solide pour supporter la charge prévue et pour l’usage
          auquel elle est destinée. BMES travaille en collaboration avec les
          architectes. Ces derniers sont chargés de concevoir les
          caractéristiques visuelles de vos projets
          <br /> <span className="highlight"> - Avantages</span> : Les
          ingénieurs en structures de BMES résolvent plusieurs problèmes. Leurs
          décisions affectent le projet entier :
          <span className="highlight">
            Coût, durée, sécurité et viabilité de votre bâtiment.
          </span>
        </p>
      </ServiceSection>
      <ServiceSection
        id="service2"
        banner="/images/armatures_pour_beton.jpg"
        media="https://www.youtube.com/embed/DBnX3bGnlXc"
      >
        <h1 className="service__title">Solutions Techniques </h1>
        <p className="service_paragraphe">
          La durabilité d’un ouvrage dépend de nombreux paramètres dont la
          qualité de sa conception, des matériaux utilisés, de sa réalisation
          ainsi que des diverses conditions d’usage, d’exploitation et de
          maintenance. Le béton résiste au temps qu’il fait et au temps qui
          passe. Mais les ouvrages en béton peuvent nécessiter des opérations de
          réparation ou de renforcement pour augmenter leur durée d’utilisation
          ou offrir de nouvelles fonctionnalités.
          <br />
          <span className="highlight">
            BMES assure diverses solutions techniques qui répondent à l’ensemble
            des problèmes potentiels rencontrés sur les matériaux ou sur les
            structures.
          </span>{" "}
          Nous choisissons la solution technique adaptée à la pathologie à
          traiter, après un diagnostic complet et précis des désordres, de leurs
          causes et de leurs évolutions.
        </p>
      </ServiceSection>
      <ServiceSection
        id="service3"
        banner="/images/equipement-essentiel-chantier-construction-obzadfnbtyjyyhfs7nfdsyxkq3avt29m9hr1zaa3lk.jpg"
        media="https://www.youtube.com/embed/pLE-KYEKGEQ"
      >
        {" "}
        <h1 className="service__title">
          Contrôle de qualité et suivi du chantier
        </h1>
        <p className="service_paragraphe">
          <span className="highlight">
            {" "}
            Dès l’ouverture de votre chantier jusqu’à la remise des clés
          </span>{" "}
          BMES vous assure du bon déroulement des travaux réalisés. Bien
          anticiper c’est mieux construire. Respecter les délais et suivre en
          temps réel l’organisation de ses chantiers font partie des
          problématiques des professionnels du génie civil en recherche de
          solutions pour superviser et coordonner leurs chantiers efficacement.
          Plusieurs actions, notamment sur le suivi des chantiers, ont été mises
          en place afin de satisfaire les clients, comme{" "}
          <span className="highlight">
            le contrôle de la qualité des travaux et la mise en œuvre d’actions
            correctives.
          </span>
        </p>
      </ServiceSection>
      <ServiceSection
        id="service4"
        banner="/images/banner.jpg"
        media="https://www.youtube.com/embed/pLE-KYEKGEQ"
      >
        {" "}
        <h1 className="service__title">Exécution </h1>
        <p className="service_paragraphe">
          BMES fait appel à des entreprises qualifiées dans chaque corps de
          métier. Ces artisans sont sélectionnés sur des critères rigoureux
          comme les qualifications, l’expérience de leurs équipes et les
          assurances dont dispose l’entreprise. Nos constructions sont avant
          tout le résultat d’une collaboration parfaite entre nos équipes
          internes et les artisans.
          <br />
          <span className="highlight">- Avantages : </span> Quelle que soit la
          taille de votre projet, BMES le traite avec une grande importance. On
          fait des appels d’offres et grâce à notre base de données, on contacte
          tous les sous-traitants pour{" "}
          <span className="highlight">vous apporter le moins-disant.</span>
        </p>
      </ServiceSection>
      <ServiceSection
        id="service5"
        banner="/images/controle.jpg"
        media="https://www.youtube.com/embed/pLE-KYEKGEQ"
      >
        {" "}
        <h1 className="service__title">Autres Services</h1>
        <p className="service_paragraphe">
          <h3 className="highlight">Electricité du bâtiment : </h3> -La
          planification -Le montage d’installations électriques de base dans le
          respect des normes techniques les plus modernes qui soient, tant pour
          les travaux neufs que dans le cadre de travaux de rénovation toute en
          respectant les règles de sécurité.
        </p>
        <p className="service_paragraphe">
          <h3 className="highlight"> Plomberie et étanchéité :</h3> -Tous types
          de travaux en plomberie-chauffage et ventilation en neuf ou rénovation
          -Réalisation des études et des travaux associés, des dépannages, et la
          maintenance d’installations dans le domaine de la tuyauterie
          industrielle, de la plomberie sanitaire, du chauffage et du génie
          climatique.
        </p>
        <p className="service_paragraphe">
          <h3 className="highlight"> Menuiseries bois et aluminium :</h3>-Pose
          de fenêtres, portes fenêtre, portes, volets roulants, volets battants
          et coulissants, menuiserie mixte bois-alu, murs rideaux, verrières,
          vérandas, brises soleil, garde-corps, jalousies, moustiquaires,
          revêtements en panneaux composites (alucobond) en aluminium ou en bois
          et de haute qualité.
        </p>
        <p className="service_paragraphe">
          <h3 className="highlight"> Décoration et Peinture : </h3> -Nous vous
          apportons un architecte d&#39;intérieur qui vous réalisera des espaces
          intérieurs esthétiques, confortables et fonctionnels en jouant avec
          les volumes, la lumière, le mobilier, les couleurs et les matériaux en
          respectant vos souhaits et votre budget et une équipe de
          professionnels en peinture pour l&#39;exécution.
        </p>
      </ServiceSection>
    </div>
  );
};

export default Service;
