import scss from './Logo.module.scss';
import image from '../../images/logo.png';

const Logo = () => {
  return  (
  <>
    <img src={image} alt="Logo" className={scss.logo}></img>
  </>
  )
};

export default Logo;