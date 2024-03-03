import React from 'react';
import scss from './ButtonMenu.module.scss';
import { TfiMenuAlt } from "react-icons/tfi";

const ButtonMenu = () => {

  return (
    <div className={scss.container}>
        <TfiMenuAlt className={scss.icon_menu}/>
    </div>
  );
};

export default ButtonMenu;