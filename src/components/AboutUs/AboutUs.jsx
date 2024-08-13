import React from 'react';
import scss from './AboutUs.module.scss';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const AboutUs = () => {
  const { t } = useTranslation();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={scss.container}>
        <div className={scss.description}>
          <h1 className={scss.title}>{t("AboutUs_title")}</h1>
          <div className={scss.paragraphs}>
            <span className={scss.union}></span>
            <span className={scss.text}>{t("AboutUs_text")}</span>
            <span className={scss.text}>{t("AboutUs_text1")}</span>
            <span className={scss.text}>{t("AboutUs_text2")}</span>
          </div>
        </div>
        <div className={scss.links_container}>
          <NavLink to="/offer" className={scss.support_link} onClick={scrollToTop}>
            {t("AboutUs_support_link")}
          </NavLink>
          <NavLink to="/about" className={scss.read_link} onClick={scrollToTop}>
            {t("AboutUs_read_link")}
          </NavLink>
        </div>
    </div>
  );
};

export default AboutUs; 