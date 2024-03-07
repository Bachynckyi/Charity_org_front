import React from 'react';
import scss from '../Header/Header.module.scss';
import { NavLink } from 'react-router-dom';

const Header = () => {

  return (
    <div className={scss.container}>
      <div className={scss.links_support}>
        <NavLink to="/" className={scss.support_link}>
          ЗАПРОСИТИ ДОПОМОГУ
        </NavLink>
        <span className={scss.text}>/</span>
        <NavLink to="/" className={scss.request_link}>
          НАДАТИ ДОПОМОГУ
        </NavLink>
      </div>
      <div className={scss.links_social}>
      </div>
    </div>
  );
};

export default Header;