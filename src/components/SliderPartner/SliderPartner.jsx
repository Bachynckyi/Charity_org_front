import React from 'react';
import scss from './SliderPartner.module.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CustomSlide from './CustomSlide/CustomSlide';
import SliderButtonNext from './SliderButtons/SliderButtonNext';
import SliderButtonPrev from './SliderButtons/SliderButtonPrev';
import { useTranslation } from 'react-i18next';

const SliderPartner = ({sliderImages}) => {
  const { t } = useTranslation();
  
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
            breakpoint: 500,
            settings: {
              slidesToShow: 2,
            }
          },
        ]
  };

    return (
      <>
        {Object.keys(sliderImages).length !== 0 && (        
        <div className={scss.container}>
          <div className={scss.title_container}>
              <span className={scss.title}>{t("SliderPartner_title")}</span>
          </div>
          <div className={scss.slider_container}>
              <Slider {...settings}>
                {sliderImages.map((request) => 
                  <CustomSlide request={request} key={request._id}/>
                )}
              </Slider>
          </div>
      </div>)}
      </>
    );
  };
  
  export default SliderPartner;