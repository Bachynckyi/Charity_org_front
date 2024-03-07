import React from 'react';
import scss from './Navigation.module.scss';
import { NavLink } from 'react-router-dom';
import Logo from 'components/Logo/Logo';

const Navigation = () => {

  return (
    <div className={scss.container}>
        <Logo/>
        <div className={scss.navigation}>
            <NavLink to="/" className={scss.navigation_item}>
                ПРО ФОНД
            </NavLink>
            <NavLink to="/" className={scss.navigation_item}>
                ПРОЄКТИ
            </NavLink>
            <NavLink to="/" className={scss.navigation_item}>
                НОВИНИ
            </NavLink>
            <NavLink to="/" className={scss.navigation_item}>
                КОНТАКТИ
            </NavLink>
            <NavLink to="/" className={scss.navigation_item}>
                ДОКУМЕНТИ
            </NavLink>
        </div>
    </div>
  );
};

export default Navigation;