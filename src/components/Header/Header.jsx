import React from 'react';
import scss from '../Header/Header.module.scss';
import Logo from 'components/Logo/Logo';
import LanguageSwitcher from 'components/LanguageSwitcher/LanguageSwitcher';
import ButtonMenu from 'components/ButtonMenu/ButtonMenu';

const Header = () => {

  return (
    <div className={scss.container}>
        <Logo/>
        <div className={scss.buttons}>
            <LanguageSwitcher/>
            <ButtonMenu/>
        </div>
    </div>
  );
};

export default Header;