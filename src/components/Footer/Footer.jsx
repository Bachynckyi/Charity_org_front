import React from 'react';
import scss from './Footer.module.scss';
import Logo from 'components/Logo/Logo';
import { Link, NavLink } from 'react-router-dom';
import instagram_logo from '../../images/instagram.svg';
import facebook_logo from '../../images/facebook.svg';
import linkedin_logo from '../../images/linkedin.svg';

const Footer = () => {

  const scrollToTop = () => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={scss.background_container}>
      <div className={scss.container}>
        <div className={scss.content_container}>
            <div className={scss.logo_container}>
              <NavLink to="/" onClick={scrollToTop}>
                <Logo/>
              </NavLink>
            </div>
            <div className={scss.info_container}>
              <div className={scss.contacts_container}>
                <p className={scss.contacts_item}>Адреса</p>
                <address className={scss.address}>Україна, 09801, Київська обл., Білоцерківський р-н, місто Тетіїв, вул.Центральна, будинок 105А</address>
                <p className={scss.VAT_number}>ЄДРПОУ: 45502942</p>
                <p className={scss.contacts_item}>Електронна пошта:</p>
                <p className={scss.link_container}>
                  <a className={scss.contacts_link} href="mailto:unityhorizon@gmail.com">unityhorizon@gmail.com</a>
                </p>
                <p className={scss.contacts_item}>Телефон:</p>
                <p className={scss.link_container}>
                  <a className={scss.contacts_link} href="tel:+380937038008">+38 (093) 703 80 08</a>
                </p>
              </div>
              <div className={scss.links_social}>
                <span className={scss.social_title}>Соціальні мережі</span>
                <div className={scss.links_container}>
                  <Link to="https://www.instagram.com/unity.horizon/">
                    <img src={instagram_logo} alt='instagram_logo' className={scss.social_logos}/>
                  </Link>
                  <Link to="https://www.facebook.com/profile.php?id=61557831786093">
                    <img src={facebook_logo} alt='facebook_logo'/>
                  </Link>
                  <Link to="https://www.linkedin.com/in/unity-horizon-5523b9301">
                    <img src={linkedin_logo} alt='linkedin_logo'/>
                  </Link>
                </div>
              </div>
            </div>
        </div>
        <div className={scss.politics_container}>
          <span className={scss.politics}>© 2024 Unity Horizon, Ink. All Rights Reserved</span>
          <NavLink style={{textDecoration: 'none'}}>
            <span className={scss.politics_link}>Privacy Policy</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Footer;