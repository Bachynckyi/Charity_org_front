import scss from './SliderButtonNext.module.scss';
import arrow from '../../../images/slider_arrow.svg';

const SliderButtonNext = (props) => {
    const {onClick} = props;

    return (
        <button className={scss.button_arrow_next} onClick={onClick}>
            <img src={arrow} alt="arrow_next" className={scss.button_image}/>
        </button>
    );
  };
  
  export default SliderButtonNext;
