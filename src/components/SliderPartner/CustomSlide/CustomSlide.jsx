import scss from './CustomSlide.module.scss';

const CustomSlide = ({request}) => {

    return (
        <div className={scss.slider_item}>
            <img src={request.photoSlider} alt='partners' className={scss.slider_image}/>
        </div>
    );
  };
  
  export default CustomSlide;