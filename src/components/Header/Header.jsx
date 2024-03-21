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
          <NavLink className={scss.social_logos}>
            <img src={instagram_logo} alt='instagram_logo' />
          </NavLink>
          <NavLink className={scss.social_logos}>
            <img src={facebook_logo} alt='facebook_logo'/>
          </NavLink>
          <NavLink className={scss.social_logos}>
            <img src={linkedin_logo} alt='linkedin_logo'/>
          </NavLink>
        </div>
      </div>
      <div className={scss.container_navigation}>
          <Logo/>
          <div className={scss.wrapper}>
            <div className={scss.navigation}>
                <NavLink to="/" className={({isActive}) => isActive ? scss.navigation_item_active : scss.navigation_item}>
                    ГОЛОВНА
                </NavLink>
                <NavLink to="/about" className={({isActive}) => isActive ? scss.navigation_item_active : scss.navigation_item}>
                    ПРО ФОНД
                </NavLink>
                <NavLink to="/projects" className={({isActive}) => isActive ? scss.navigation_item_active : scss.navigation_item}>
                    ПРОЄКТИ
                </NavLink>
                <NavLink to="/news" className={({isActive}) => isActive ? scss.navigation_item_active : scss.navigation_item}>
                    НОВИНИ
                </NavLink>
                <NavLink to="/contacts" className={({isActive}) => isActive ? scss.navigation_item_active : scss.navigation_item}>
                    КОНТАКТИ
                </NavLink>
                <NavLink to="documents" className={({isActive}) => isActive ? scss.navigation_item_active : scss.navigation_item}>
                    ДОКУМЕНТИ
                </NavLink>
                <NavLink to="/details" className={({isActive}) => isActive ? scss.navigation_item_active : scss.navigation_item}>
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
    </div>
  );
};

export default Header;