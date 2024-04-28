import scss from './SliderPartner.module.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "./slick-theme.css"
// import "./slick.css"
import CustomSlide from './CustomSlide/CustomSlide';
import SliderButtonNext from './SliderButtons/SliderButtonNext';
import SliderButtonPrev from './SliderButtons/SliderButtonPrev';

const SliderPartner = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SliderButtonNext/>,
        prevArrow: <SliderButtonPrev/>,
        lazyLoad: true,
        swipeToSlide: true,
        focusOnSelect: true,
        pauseOnHover: true,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
              }
            },
          ]
      };

    return (
        <div className={scss.container}>
            <div className={scss.title_container}>
                <span className={scss.title}>Наші партнери</span>
            </div>
            <div className={scss.slider_container}>
                <Slider {...settings}>
                    <CustomSlide idex={1}/>
                    <CustomSlide idex={2}/>
                    <CustomSlide idex={3}/>
                    <CustomSlide idex={4}/>
                    <CustomSlide idex={5}/>
                </Slider>
            </div>
    </div>

    );
  };
  
  export default SliderPartner;