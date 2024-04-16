import React from 'react';
import '../styles/card.css';

const services = [
    {
        platform: "Shopify",
        developmentCosts: [
            { type: "Basique", description: "Utilisation de thèmes préexistants avec peu de personnalisations", cost: "€400" },
            { type: "Avancé", description: "Personnalisations modérées et quelques fonctionnalités spécifiques", cost: "€400 à €600" }
        ],
        turnaroundTime: "Près en 24h-48h"
    },
    {
        platform: "WordPress",
        developmentCosts: [
            { type: "Basique", description: "Utilisation de thèmes gratuits ou peu coûteux avec peu de personnalisations", cost: "€500" },
            { type: "Avancé", description: "Thèmes premium ou personnalisations modérées", cost: "€600 à €800" }
        ],
        turnaroundTime: "Près en 24h-72h"
    },
    {
        platform: "Site sur mesure",
        developmentCosts: [
            { type: "Exclusif", description: "Thèmes et design sur mesure, développement de plugins spécifiques, fonctionnalités uniques et intégrations complexes avec conception graphique de base HTML, CSS, JavaScript", cost: "€1000 et plus" }
        ],
        turnaroundTime: "Durée dépend de la demande du client"
    }
];
function Cards({linkPhone}) {
    return (
        <>
            {
                services.map((ele, ind) =>
                    <div className='card'>
                        <p>site web : {ele.platform}</p>
                        <hr />

                        {
                            ele.developmentCosts.length > 1 ?
                                <div className='details'>
                                    <div className=''>
                                        <p><span>Type :</span> {ele.developmentCosts[0].type}</p>
                                        <p>-{ele.developmentCosts[0].description}</p>
                                        <p>Cout: {ele.developmentCosts[0].cost}</p>
                                    </div>
                                    
                                    <div className=''>
                                        <p><span>Type :</span>{ele.developmentCosts[1].type}</p>
                                        <p>-{ele.developmentCosts[1].description}</p>
                                        <p>Cout: {ele.developmentCosts[1].cost}</p>
                                    </div>
                                </div> :
                                <div className='details'>
                                    <div className=''>
                                        <p><span>Type :</span>{ele.developmentCosts[0].type}</p>
                                        <p><span>-  </span>{ele.developmentCosts[0].description}</p>
                                        <p><span>Cout: </span>{ele.developmentCosts[0].cost}</p>
                                    </div>
                                </div>
                        }

                        <hr />
                        <div className='card-foot'>
                            <h2>Livraison à : {ele.turnaroundTime}</h2>
                            <a href={linkPhone} target='_blank'>
                              <button>
                                GO-&gt;
                              </button>  
                            </a>
                        </div>
                    </div>
                )
            }
        </>
    );
}

export default Cards;;