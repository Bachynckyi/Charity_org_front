import React from 'react';
import scss from './Footer.module.scss';
import Logo from 'components/Logo/Logo';
import { NavLink } from 'react-router-dom';
import instagram_logo from '../../images/instagram.svg';
import facebook_logo from '../../images/facebook.svg';
import linkedin_logo from '../../images/linkedin.svg';

const Footer = () => {

  return (
    <div className={scss.container}>
      <div className={scss.main_container}>
        <div className={scss.left_container}>
          <div className={scss.logo_container}>
            <Logo/>
          </div>
          <div className={scss.info_container}>
            <div className={scss.contacts_container}>
              <p className={scss.contacts_item}>Адреса</p>
              <address className={scss.address}>Вулиця Миколи Бажана 14, Київ, Київська область, Україна, 44016</address>
              <p className={scss.VAT_number}>ЄДРПОУ: 43674951</p>
              <p className={scss.contacts_item}>Електронна пошта:</p>
              <p className={scss.link_container}>
                <a className={scss.contacts_link} href="hello@unity.horizon.ua"> hello@unity.horizon.ua</a>
              </p>
              <p className={scss.contacts_item}>Телефон:</p>
              <p className={scss.link_container}>
                <a className={scss.contacts_link} href="tel:+380673538808"> +38 (067) 353 88 08</a>
              </p>
            </div>
            <div className={scss.links_social}>
              <span className={scss.contacts_item}>Соціальні мережі</span>
              <div className={scss.links_container}>
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
          </div>
        </div>
      </div>
      <div className={scss.politics_container}>
        <span className={scss.politics}>© 2024 Unity Horizon, Ink. All Reserved</span>
        <NavLink style={{textDecoration: 'none'}}>
          <span className={scss.politics_link}>Privacy Policy</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Footer;