import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/bundle';
import image from '../../images/NP.png';
import scss from './SliderPartner.module.scss';

const SliderPatner = () => {

    return (
        <div className={scss.container}>
            <div className={scss.partners}>
                <span className={scss.title}>Наші партнери</span>
                <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                spaceBetween={30}
                slidesPerView={3}
                >
                <SwiperSlide>
                    <img src={image} alt='partners' className={scss.image}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image} alt='partners' className={scss.image}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image} alt='partners' className={scss.image}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image} alt='partners' className={scss.image}/>
                </SwiperSlide>
            </Swiper>
            </div>
    </div>

    );
  };
  
  export default SliderPatner;