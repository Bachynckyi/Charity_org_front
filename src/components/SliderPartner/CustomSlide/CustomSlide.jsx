import scss from './CustomSlide.module.scss';
import image from '../../../images/NP.png';

const CustomSlide = (props) => {
    const { index } = props;

    return (
        <div className={scss.slider_item} index={index}>
            <img src={image} alt='partners' className={scss.slider_image}/>
        </div>
    );
  };
  
  export default CustomSlide;