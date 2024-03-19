import React from 'react';
import scss from '../Header/Header.module.scss';
import { NavLink } from 'react-router-dom';
import instagram_logo from '../../images/instagram.svg';
import facebook_logo from '../../images/facebook.svg';
import linkedin_logo from '../../images/linkedin.svg';
import Logo from 'components/Logo/Logo';

const Header = () => {

  return (
    <div className={scss.container}>
      <div className={scss.container_header}>
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
          <NavLink>
            <img src={instagram_logo} alt='instagram_logo' className={scss.social_logos}/>
          </NavLink>
          <NavLink>
            <img src={facebook_logo} alt='facebook_logo'/>
          </NavLink>
          <NavLink>
            <img src={linkedin_logo} alt='linkedin_logo'/>
          </NavLink>
        </div>
      </div>
      <div className={scss.container_navigation}>
          <Logo/>
          <div className={scss.navigation}>
              <NavLink to="/about" className={scss.navigation_item}>
                  ПРО ФОНД
              </NavLink>
              <NavLink to="/" className={scss.navigation_item}>
                  ПРОЄКТИ
              </NavLink>
              <NavLink to="/" className={scss.navigation_item}>
                  НОВИНИ
              </NavLink>
              <NavLink to="/contacts" className={scss.navigation_item}>
                  КОНТАКТИ
              </NavLink>
              <NavLink to="/" className={scss.navigation_item}>
                  ДОКУМЕНТИ
              </NavLink>
              <NavLink to="/details" className={scss.navigation_item}>
                  РЕКВІЗИТИ
              </NavLink>
          </div>
          <div className={scss.language_container}>
              <NavLink to="/" className={scss.language_item_current}>
                  UA
              </NavLink>
              <NavLink to="/" className={scss.language_item}>
                  EN
              </NavLink>
          </div>
      </div>
    </div>
  );
};

export default Header;