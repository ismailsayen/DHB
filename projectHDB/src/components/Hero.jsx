import "../styles/hero.css";
import { linkPhone } from "../const";
import { motion } from "framer-motion";
function Hero() {
  return (
    <div className="section hero">
      <div className="div-center">
        <div className="text">
          <motion.img
            animate={["rotate"]}
            whileHover={["grow"]}
            variants={{
              grow: {
                scale: 1.1,
              },
              rotate: {
                rotate: [null, -5, 5, 0],
                transition: {
                  duration: 10,
                  repeat: Infinity,
                  repeatDelay: 0.2,
                  repeatType: "reverse",
                },
              },
              initial: {
                y: [-20, 20],

                transition: {
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                },
              },
            }}
            src="./images/img.svg"
            className="img1"
          />
          <h1>
            Votre Site Pret en Moin de<span> 48H</span>
          </h1>
          <p>Des solutions numériques pour votre réussite</p>
          <a href={linkPhone} target="_blank">
            <button className="btn">Contactez-Nous</button>
          </a>
        </div>
      </div>
      <img
        src="https://moula-agency.com/wp-content/uploads/2024/01/fusee1.png"
        className="img2"
      />
    </div>
  );
}

export default Hero;
