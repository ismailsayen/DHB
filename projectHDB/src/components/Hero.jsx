import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import '../styles/hero.css';
import { linkPhone } from "../const";

function Hero() {
    const [scrollY, setScrollY] = useState(0);
    const controls = useAnimation();
    let speed = 0;
    if (window.innerWidth > 400) {
        speed = 2.5;
    } else {
        speed = 0.5;
    }

    useEffect(() => {
        function handleScroll() {
            setScrollY(window.scrollY);
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        controls.start({
            x: scrollY * speed,
        });
    }, [scrollY, controls, speed]);

    return (
        <div className="section hero">
            <div className="div-center">
                <div className="text">
                    <motion.img
                        animate={{ rotate: [null, -5, 5, 0] }}
                        whileHover={{ scale: 1.1 }}
                        variants={{
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
                        Votre Site Prêt en Moins de<span> 48H</span>
                    </h1>
                    <p>Des solutions numériques pour votre réussite</p>
                    <a href={linkPhone} target="_blank" rel="noopener noreferrer">
                        <button className="btn">Contactez-Nous</button>
                    </a>
                </div>
            </div>
            <motion.img
                src="https://moula-agency.com/wp-content/uploads/2024/01/fusee1.png"
                className="img2"
                animate={controls}
            />
        </div>
    );
}

export default Hero;
