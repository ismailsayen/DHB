import React from 'react';
import '../styles/section.css';

function Section({ linkPhone }) {
  return (
    <div className='container-section'>
      <div className='parent'>
        <div className='justifydiv'>
          <img src="./images/img.svg" className='img1' />
          <div className='text'>
            <span>VOTRE SITE PRET </span>
            <div>EN MOINS DE 48H</div>
            <p>Des solutions numériques pour votre réussite</p>
            <a href={linkPhone} target='_blank'>
              <button className='btn'>
                Contactez-Nous
              </button>
            </a>
          </div>
        </div>
        <img src="https://moula-agency.com/wp-content/uploads/2024/01/fusee1.png" className='img2' />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f3f4f5" fill-opacity="1" d="M0,192L48,176C96,160,192,128,288,96C384,64,480,32,576,64C672,96,768,192,864,234.7C960,277,1056,267,1152,240C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
      </div>
    </div>
  );
}

export default Section;