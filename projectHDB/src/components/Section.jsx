import React from 'react';
import '../styles/section.css';

function Section() {
  return (
    <div className='container-section'>
      <div className='parent'>
        <div className='justifydiv'>
          <img src="./images/img1.png" className='img1' />
          <div className='text'>
            <span>VOTRE SITE PRET </span>
            <div>EN MOINS DE 48H</div>
            <p>Des solutions numériques pour votre réussite</p>
          </div>
        </div>
        <img src="https://moula-agency.com/wp-content/uploads/2024/01/fusee1.png" className='img2' />
      </div>
    </div>
  );
}

export default Section;