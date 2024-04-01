import React from 'react';
import scss from '../Header/Header.module.scss';
import { NavLink, Link } from 'react-router-dom';
import instagram_logo from '../../images/instagram.svg';
import facebook_logo from '../../images/facebook.svg';
import linkedin_logo from '../../images/linkedin.svg';
import Logo from 'components/Logo/Logo';

const Header = () => {

  const scrollToTop = () => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

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
          <Link className={scss.social_logos} to="https://www.instagram.com/unity_horizon_charity_fund/">
            <img src={instagram_logo} alt='instagram_logo'/>
          </Link>
          <Link className={scss.social_logos} to="https://www.facebook.com/profile.php?id=61557831786093">
            <img src={facebook_logo} alt='facebook_logo'/>
          </Link>
          <Link className={scss.social_logos} to="https://www.linkedin.com/in/unity-horizon-5523b9301">
            <img src={linkedin_logo} alt='linkedin_logo'/>
          </Link>
        </div>
      </div>
      <div className={scss.container_navigation}>
          <NavLink to="/" onClick={scrollToTop}>
            <Logo/>
          </NavLink>
          <div className={scss.wrapper}>
            <div className={scss.navigation}>
                <NavLink to="/" className={({isActive}) => isActive ? scss.navigation_item_active : scss.navigation_item} onClick={scrollToTop}>
                    ГОЛОВНА
                </NavLink>
                <NavLink to="/about" className={({isActive}) => isActive ? scss.navigation_item_active : scss.navigation_item} onClick={scrollToTop}>
                    ПРО ФОНД
                </NavLink>
                <NavLink to="/projects" className={({isActive}) => isActive ? scss.navigation_item_active : scss.navigation_item} onClick={scrollToTop}>
                    ПРОЄКТИ
                </NavLink>
                <NavLink to="/news" className={({isActive}) => isActive ? scss.navigation_item_active : scss.navigation_item} onClick={scrollToTop}>
                    НОВИНИ
                </NavLink>
                <NavLink to="/contacts" className={({isActive}) => isActive ? scss.navigation_item_active : scss.navigation_item} onClick={scrollToTop}>
                    КОНТАКТИ
                </NavLink>
                <NavLink to="documents" className={({isActive}) => isActive ? scss.navigation_item_active : scss.navigation_item} onClick={scrollToTop}>
                    ДОКУМЕНТИ
                </NavLink>
                <NavLink to="/details" className={({isActive}) => isActive ? scss.navigation_item_active : scss.navigation_item} onClick={scrollToTop}>
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