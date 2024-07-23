import React from 'react';
import scss from "./Banner.module.scss";
import image from '../../images/banner.jpg';
import { useTranslation } from 'react-i18next';

const Banner = () => {
  const { t } = useTranslation();

  return (
    <div className={scss.container}>
        <img src={image} alt="Banner" className={scss.banner}/>
        <h1 className={scss.text}>{t("Banner_text")}</h1>
    </div>
  );
};

export default Banner;