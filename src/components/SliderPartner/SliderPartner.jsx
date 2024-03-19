import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/bundle';
import image from '../../images/NP.png';
import scss from './SliderPartner.module.scss';

const SliderPatner = () => {

    return (
        <div className={scss.container}>
            <div className={scss.partners}>
                <span className={scss.title}>Наші партнери</span>
            </div>
            <div className={scss.slider_container}>
                <Swiper
                    modules={[Navigation, Pagination]}
                    navigation
                    spaceBetween={30}
                    slidesPerView={3}
                    loop={true}
                    >
                    
                    <SwiperSlide className={scss.slide_res}>
                        <img src={image} alt='partners' className={scss.image}/>
                    </SwiperSlide>
                    <SwiperSlide className={scss.slide_res}>
                        <img src={image} alt='partners' className={scss.image}/>
                    </SwiperSlide>
                    <SwiperSlide className={scss.slide_res}>
                        <img src={image} alt='partners' className={scss.image}/>
                    </SwiperSlide>
                    <SwiperSlide className={scss.slide_res}>
                        <img src={image} alt='partners' className={scss.image}/>
                    </SwiperSlide>
                </Swiper>

            </div>
    </div>

    );
  };
  
  export default SliderPatner;