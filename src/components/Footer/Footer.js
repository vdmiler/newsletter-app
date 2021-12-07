import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.scss';

const Footer = () => {
   return (
      <div className="footer">
         <div className="footer__container _container">
            <div className="footer__body">
               <div className="footer__left-side">
                  <NavLink className="footer__caption" to="/">
                     Новостник
                  </NavLink>
                  <p className="footer__sign">
                     Single Page Application
                  </p>
               </div>
               <div className="footer__middle-side">
                  <p className="footer__diploma">
                     Дипломный проект
                  </p>
               </div>
               <div className="footer__rigth-side">
                  <p className="footer__sign">
                     Made by
                  </p>
                  <p className="footer__caption">
                     Miller Vadym
                  </p>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Footer;