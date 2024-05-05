import React, { useState, useRef, useEffect } from 'react';
import scss from '../Header/Header.module.scss';
import { NavLink, Link } from 'react-router-dom';
import instagram_logo from '../../images/instagram.svg';
import facebook_logo from '../../images/facebook.svg';
import linkedin_logo from '../../images/linkedin.svg';
import Logo from 'components/Logo/Logo';
import { IoMdMenu } from "react-icons/io";
import { MdClose } from "react-icons/md";

const Header = () => {
  const [isOpenMenu, setOpenMenu] = useState(false);
  const menuRef = useRef(null); 

  const useClickOutside = (ref, callback) => {
    const handleClick = (e) => {
      if(ref.current && !ref.current.contains(e.target)) {
        callback();
      }
    };
    useEffect(() => {
      document.addEventListener("mousedown", handleClick);
      return () => {
        document.removeEventListener("mousedown", handleClick)
      };
    });
  };

  useClickOutside(menuRef, () => {
    closeMenu();
  })

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const scrollToTopMobile = () => {
    setOpenMenu(false);
    document.body.style.cssText = `overflow-y: auto`
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const openMenu = () => {
    document.body.style.cssText = `overflow-y: hidden`
    setOpenMenu(true);
  };

  const closeMenu = () => {
    document.body.style.cssText = `overflow-y: auto`
    setOpenMenu(false);
  };

  return (
    <div className={scss.container}>
      <div className={scss.background_container_header}>
        <div className={scss.container_header}>
          <div className={scss.links_support}>
            <NavLink to="/request" className={scss.support_link} onClick={scrollToTop}>ЗАПРОСИТИ ДОПОМОГУ</NavLink>
            <span className={scss.text}>/</span>
            <NavLink to="/offer" className={scss.request_link} onClick={scrollToTop}>НАДАТИ ДОПОМОГУ</NavLink>
          </div>
          <div className={scss.links_social}>
            <Link className={scss.social_logos} to="https://www.instagram.com/unity.horizon/">
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
      </div>
      <div className={scss.background_container_navigation}>
        <div className={scss.container_navigation}>
            <NavLink to="/" onClick={scrollToTop}><Logo/></NavLink>
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
                  <NavLink to="/documents" className={({isActive}) => isActive ? scss.navigation_item_active : scss.navigation_item} onClick={scrollToTop}>
                      ДОКУМЕНТИ
                  </NavLink>
                  <NavLink to="/bankdetails" className={({isActive}) => isActive ? scss.navigation_item_active : scss.navigation_item} onClick={scrollToTop}>
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
              <IoMdMenu className={scss.menu_icon} onClick={openMenu}/>
              <div className={isOpenMenu ? scss.mobile_menu_active : scss.mobile_menu} ref={menuRef}>
                    <MdClose className={scss.icon_close} onClick={closeMenu}/>
                    <div className={scss.mobile_navigation}>
                      <NavLink to="/" className={scss.mobile_navigation_item} onClick={scrollToTopMobile}>Головна</NavLink>
                      <NavLink to="/about" className={scss.mobile_navigation_item} onClick={scrollToTopMobile}>Про фонд</NavLink>
                      <NavLink to="/projects" className={scss.mobile_navigation_item} onClick={scrollToTopMobile}>Проєкти</NavLink>
                      <NavLink to="/news" className={scss.mobile_navigation_item} onClick={scrollToTopMobile}>Новини</NavLink>
                      <NavLink to="/contacts" className={scss.mobile_navigation_item} onClick={scrollToTopMobile}>Контакти</NavLink>
                      <NavLink to="/documents" className={scss.mobile_navigation_item} onClick={scrollToTopMobile}>Документи</NavLink>
                      <NavLink to="/bankdetails" className={scss.mobile_navigation_item } onClick={scrollToTopMobile}>Реквізити</NavLink>
                    </div>
                    <div className={scss.mobile_buttons}>
                        <NavLink to="/request" className={scss.mobile_request_link} onClick={scrollToTopMobile}>ЗАПРОСИТИ ДОПОМОГУ</NavLink>
                        <NavLink to="/offer" className={scss.mobile_support_link} onClick={scrollToTopMobile}>НАДАТИ ДОПОМОГУ</NavLink>
                    </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Header;