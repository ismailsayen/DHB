import "../styles/card.css";
import { linkPhone } from "../const";

const services = [
  {
    platform: "Shopify",
    developmentCosts: [
      {
        type: "Basique",
        description:
          "Utilisation de thèmes préexistants avec peu de personnalisations",
        cost: "€400",
      },
      {
        type: "Avancé",
        description:
          "Personnalisations modérées et quelques fonctionnalités spécifiques",
        cost: "€400 à €600",
      },
    ],
    turnaroundTime: "Près en 24h-48h",
  },
  {
    platform: "WordPress",
    developmentCosts: [
      {
        type: "Basique",
        description:
          "Utilisation de thèmes gratuits ou peu coûteux avec peu de personnalisations",
        cost: "€500",
      },
      {
        type: "Avancé",
        description: "Thèmes premium ou personnalisations modérées",
        cost: "€600 à €800",
      },
    ],
    turnaroundTime: "Près en 24h-72h",
  },
  {
    platform: "Site sur mesure",
    developmentCosts: [
      {
        type: "Exclusif",
        description:
          "Thèmes et design sur mesure, développement de plugins spécifiques, fonctionnalités uniques et intégrations complexes avec conception graphique de base HTML, CSS, JavaScript",
        cost: "€1000 et plus",
      },
    ],
    turnaroundTime: "Durée dépend de la demande du client",
  },
];
function Cards() {
  return (
    <>
      {services.map((ele, ind) => (
        <div key={ind} className="card">
          <h3>site web : {ele.platform}</h3>
          <hr />

          {ele.developmentCosts.length > 1 ? (
            <div className="details">
              <div className="col col1">
                <div>
                  <p className="col-type">
                    <span>Type :</span> {ele.developmentCosts[0].type}
                  </p>
                  <p>-{ele.developmentCosts[0].description}</p>
                </div>
                <p className="col-price">
                  {ele.developmentCosts[0].cost}
                </p>
              </div>

              <div className="col col2">
                <div>
                  <p className="col-type">
                    <span>Type :</span>
                    {ele.developmentCosts[1].type}
                  </p>
                  <p className="col-desc">
                    -{ele.developmentCosts[1].description}
                  </p>
                </div>
                <p className="col-price">
                  {ele.developmentCosts[1].cost}
                </p>
              </div>
            </div>
          ) : (
            <div className="details">
              <div className="col">
                <p className="col-type">
                  <span>Type :</span>
                  {ele.developmentCosts[0].type}
                </p>
                <p className="col-desc">
                  <span>- </span>
                  {ele.developmentCosts[0].description}
                </p>
                <p>
                  <span className="col-price"> 
                  {ele.developmentCosts[0].cost}</span>
                </p>
              </div>
            </div>
          )}

          <hr />
          <div className="card-foot">
            <h4>Livraison à : {ele.turnaroundTime}</h4>
            <a href={linkPhone} target="_blank">
              <button>GO-&gt;</button>
            </a>
          </div>
        </div>
      ))}
    </>
  );
}

export default Cards;
