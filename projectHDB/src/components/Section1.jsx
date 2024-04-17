import React, { useEffect } from 'react';
import "../styles/section1.css";
import Cards from "./Cards";
import { linkPhone } from "../const";
import AOS from 'aos';
import 'aos/dist/aos.css';
function Section1() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div style={{ paddingTop: "10rem" }} className="section sec1">
      <div className="waves">
        <svg
          style={{ width: "100%" }}
          id="waves"
          viewBox="0 0 1440 230"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="white"
            d="M0,46L40,61.3C80,77,160,107,240,111.2C320,115,400,92,480,92C560,92,640,115,720,126.5C800,138,880,138,960,138C1040,138,1120,138,1200,126.5C1280,115,1360,92,1440,84.3C1520,77,1600,84,1680,107.3C1760,130,1840,169,1920,157.2C2000,146,2080,84,2160,53.7C2240,23,2320,23,2400,42.2C2480,61,2560,100,2640,103.5C2720,107,2800,77,2880,84.3C2960,92,3040,138,3120,161C3200,184,3280,184,3360,180.2C3440,176,3520,169,3600,149.5C3680,130,3760,100,3840,99.7C3920,100,4000,130,4080,145.7C4160,161,4240,161,4320,145.7C4400,130,4480,100,4560,88.2C4640,77,4720,84,4800,88.2C4880,92,4960,92,5040,76.7C5120,61,5200,31,5280,34.5C5360,38,5440,77,5520,99.7C5600,123,5680,130,5720,134.2L5760,138L5760,230L5720,230C5680,230,5600,230,5520,230C5440,230,5360,230,5280,230C5200,230,5120,230,5040,230C4960,230,4880,230,4800,230C4720,230,4640,230,4560,230C4480,230,4400,230,4320,230C4240,230,4160,230,4080,230C4000,230,3920,230,3840,230C3760,230,3680,230,3600,230C3520,230,3440,230,3360,230C3280,230,3200,230,3120,230C3040,230,2960,230,2880,230C2800,230,2720,230,2640,230C2560,230,2480,230,2400,230C2320,230,2240,230,2160,230C2080,230,2000,230,1920,230C1840,230,1760,230,1680,230C1600,230,1520,230,1440,230C1360,230,1280,230,1200,230C1120,230,1040,230,960,230C880,230,800,230,720,230C640,230,560,230,480,230C400,230,320,230,240,230C160,230,80,230,40,230L0,230Z"
          ></path>
        </svg>
      </div>
      <div className="sec1-content" data-aos="fade-up"
        data-aos-duration="3000">
        <div className="sec1-content_information">
          <h2>PACK CONCEPTION ...</h2>
          <h3>avec notre expertise en création de site web.</h3>
          <p>
            Notre équipe d'experts en marketing numérique offre une gamme
            complète de services pour optimiser votre site web.
          </p>
        </div>
        <div className="img">
          <img
            src="https://www.heartburst.com.au/wp-content/uploads/2023/08/shopify-dashboard-mockup-1.png"
          />
        </div>
      </div>
      <div style={{ margin: "5rem" }} className="cont-cards" data-aos="fade-up"
        data-aos-duration="3000">
        <Cards />
      </div>
    </div>
  );
}

export default Section1;
