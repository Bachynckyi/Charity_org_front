import React from 'react';
import scss from "./Banner.module.scss";
import image from '../../images/banner.png';

const Banner = () => {

  return (
    <div className={scss.container}>
        <img src={image} alt="Banner" className={scss.banner}></img>
    </div>
  );
};

export default Banner;