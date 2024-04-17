import React from 'react';
import '../styles/footer.css';
import { FaSnapchatGhost, FaWhatsapp } from 'react-icons/fa';
import { linkPhone } from "../const";
import { linkSnap } from "../const";
export default function Footer() {
  return (
    <footer>
      <div className='info-hedaer'>
        <img src='./logo.png' width={100} height={100} />
        <div className='icons'>
          <a href={linkSnap} target='_blank'>
            <FaSnapchatGhost color="#FFFC00" size={55} />
          </a>
          <a href={linkPhone} target='_blank'>
            <FaWhatsapp color="#25D366" size={55} />
          </a>
        </div>
      </div>
      <div className='copyright'>
        <p>&copy; 2024 HDB-Agency. Tous droits réservés.</p>
      </div>
    </footer>
  );
}
