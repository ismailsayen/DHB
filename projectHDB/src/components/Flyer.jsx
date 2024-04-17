import { useEffect } from 'react';
import '../styles/flyer.css';
import { linkPhone } from "../const";
import AOS from 'aos';
import 'aos/dist/aos.css';
function Flyer() {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div className='container-fly' data-aos="fade-up"
            data-aos-duration="3000">
            <div className='flyer-description'>
                <h2>PACK DESIGNER</h2>
                <h3>Créez votre image de marque en toute simplicité.</h3>
                <p>La vente de packs de design offre une solution complète pour les besoins de communication visuelle, incluant la création de flyers, logos, bannières et autres supports graphiques. Ces packs sont idéaux pour les entreprises et individus cherchant à établir une identité visuelle forte et cohérente.</p>
            </div>
            <div className='flyer-cont'>
                <div className='content'>
                    <h3 className='title'>PACK FLYER ESSENTIEL</h3>
                    <hr />
                    <div className='cost'>
                        <span className='des'>À Partir de :</span>
                        <span className='price'>50$</span>
                    </div>

                    <ul>
                        <li>- 1 flyer téléphone</li>
                        <li>- une création de logo offerte</li>
                    </ul>
                    <div className="card-foot">
                        <a href={linkPhone} target="_blank">
                            <button>GO-&gt;</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Flyer;
