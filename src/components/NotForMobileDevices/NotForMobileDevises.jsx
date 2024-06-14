import React from 'react';
import scss from "./NotForMobileDevices.module.scss";

const NotForMobileDevices = () => {

  return (
    <div className={scss.info_container}>
        <p className={scss.info_text}>Недоступно на мобільних пристроях</p>
    </div>
  );
};

export default NotForMobileDevices; 