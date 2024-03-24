import scss from './SliderButtonPrev.module.scss';
import arrow from '../../../images/slider_arrow.svg';

const SliderButtonPrev = (props) => {
    const {onClick} = props;

    return (
        <button className={scss.button_arrow_prev} onClick={onClick}>
            <img src={arrow} alt="arrow_prev" className={scss.button_image}/>
        </button>
    );
  };
  
  export default SliderButtonPrev;