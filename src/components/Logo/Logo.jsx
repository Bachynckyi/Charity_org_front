import { NavLink } from 'react-router-dom';
import scss from './Logo.module.scss';
import image from '../../images/logo.png';

const Logo = () => {
  return  (
  <NavLink to="/">
    <img src={image} alt="Logo" className={scss.logo}></img>
  </NavLink>
  )
};

export default Logo;