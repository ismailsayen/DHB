import React from 'react';
import '../styles/flyer.css'; // Import du fichier CSS

function Flyer() {
    return (
        <div className='container-fly'>
            <div className='flyer-cont'>
                <div className='content'>
                    <span className='title'>PACK FLYER ESSENTIEL</span>
                    <hr />
                    
                        <span className='des'>À Partir de :</span>
                        <span className='price'>50€</span>
                    
                    <ul>
                        <li>- 1 flyer téléphone</li>
                        <li>- une création de logo offerte</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Flyer;
