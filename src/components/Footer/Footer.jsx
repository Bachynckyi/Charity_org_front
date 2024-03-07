import React from 'react';
import scss from './Footer.module.scss';

const Footer = () => {

  return (
    <div className={scss.container}>
      <div>
        <span className={scss.politics}></span>
      </div>
    </div>
  );
};

export default Footer;