import React from 'react';
import scss from "./Banner.module.scss";
import image from '../../images/banner.jpg';

const Banner = () => {

  return (
    <div className={scss.container}>
        <img src={image} alt="Banner" className={scss.banner}/>
        <h1 className={scss.text}>ГОРИЗОНТ ЄДНОСТІ</h1>
    </div>
  );
};

export default Banner;