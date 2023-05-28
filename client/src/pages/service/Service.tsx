import React from "react";
import "../../_dist/Services.css";
type Props = {};

const Service = (props: Props) => {
  return (
    <div className="bmes__services">
      <article className="bmes__etudes">
        <h1>Études et Conceptions</h1>
        <p>
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
        </p>
        <div className="bmes__service__etude__image">
          <img src="/images/caroussel-image-1.jpg" alt="" />
        </div>
      </article>
      <div className="bmes__service__etude__bigImage">
        <img src="/images/caroussel-image-3.jpg" alt="" />
      </div>
    </div>
  );
};

export default Service;
