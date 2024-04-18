import React from 'react';
import '../styles/footer.css';
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaSnapchat } from "react-icons/fa6";
import { linkPhone } from "../const";
import { linkSnap } from "../const";
export default function Footer() {
  return (
    <footer id='contact'>
      <div className='info-hedaer'>
        <img src='./logo.png' className='logo-footer' width={140} height={100} />
        <div className='icons'>
          <a href={linkSnap} target='_blank'>
            <FaSnapchat  />
          </a>
          <a href={linkPhone} target='_blank'>
            <FaSquareWhatsapp  />
          </a>
        </div>
      </div>
      <div className='copyright'>
        <p>&copy; 2024 HDB-Agency. Tous droits réservés.</p>
      </div>
    </footer>
  );
}
