/* eslint-disable react/no-unescaped-entities */

import "../styles/section2.css";
import Cards from "./Cards";
import { linkPhone } from "../const";

function Section2() {
  return (
    <div className="container sec2">
      
      <div className="information">
        <div>
          <h1>PACK CONCEPTION ...</h1>
          <p>avec notre expertise en création de site web.</p>
          <p>
            Notre équipe d'experts en marketing numérique offre une gamme
            complète de services pour optimiser votre site web.
          </p>
        </div>
        <img
          src="https://www.heartburst.com.au/wp-content/uploads/2023/08/shopify-dashboard-mockup-1.png"
          width={"600"}
          height={"475"}
        />
      </div>
      <div className="cont-cards">
        <Cards linkPhone={linkPhone} />
      </div>
    </div>
  );
}

export default Section2;
