import React from 'react';
import scss from "./Banner.module.scss";
import image from '../../images/banner.png';

const Banner = () => {

  return (
    <div className={scss.container}>
        <img src={image} alt="Banner" className={scss.banner}/>
        <span className={scss.text}>ГОРИЗОНТ ЄДНОСТІ</span>
    </div>
  );
};

export default Banner;