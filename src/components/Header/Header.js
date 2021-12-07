import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';
import { menuItems } from '../../constans';

const Header = () => {
   return (
      <div className="header">
         <div className="header__container _container">
            <div className="header__body">
               <NavLink className="header__logo" to="/">
                  Новостник
               </NavLink>
               <nav className="header__menu menu">
                  <ul className="menu__list">
                     {
                        menuItems.map((item, index) => {
                           return (
                              <li className="menu__item" key={index}>
                                 <NavLink className="menu__link" exact to={item.path}>{item.label}</NavLink>
                              </li>
                           )
                        })
                     }
                  </ul>
               </nav>
            </div>
         </div>
      </div>
   );
}

export default Header;