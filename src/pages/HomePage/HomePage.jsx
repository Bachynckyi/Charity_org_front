import React, {useEffect, useState} from 'react';
import scss from './HomePage.module.scss';
import Banner from 'components/Banner/Banner';
import Mission from 'components/Mission/Mission';
import AboutUs from 'components/AboutUs/AboutUs';
import Achievements from 'components/Achievements/Achievements';
import News from 'components/News/News';
import Partners from 'components/Partners/Partners';
import SliderPartner from 'components/SliderPartner/SliderPartner';
import GlobalLoader from '../../components/GlobalLoader/GlobalLoader';
import { LoaderContainer, loader } from "react-global-loader";
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { getAchievements, getLastNews, getAllPhotoSlider } from '../../redux/data/data-operations';

const HomePage = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [achievements, setAchievements] = useState([]);
  const [sliderImages, setSliderImages] = useState([]);
  const [lastNews, setLastNews] = useState([]);

  useEffect(() => {
    loader.show();
    setLoading(true);
    document.body.style.overflowY = 'hidden';
    dispatch(getAchievements())
    .then(response => {
      setAchievements(response.payload);
    });
    dispatch(getAllPhotoSlider())
    .then(response => {
      setSliderImages(response.payload);
    });
    dispatch(getLastNews())
      .then(response => {
        setLastNews(response.payload);
        setTimeout(() => {
          setLoading(false);
          document.body.style.overflowY = 'scroll';
          loader.hide();
        }, 800);
      });
      // eslint-disable-next-line
  }, []);

  return (
    <>  
          <LoaderContainer>
            <GlobalLoader/>
          </LoaderContainer>
          {loading !== true ? (
            <motion.div
            transition={{duration: 0.4}}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}>
                <div className={scss.container}>
                  <Banner/>
                  <Mission/>
                  <AboutUs/>
                  <Achievements achievements={achievements}/>
                  <News lastNews={lastNews}/>
                  <SliderPartner sliderImages={sliderImages}/>
                  <Partners/>
                </div>
            </motion.div>
          ) : (<div className={scss.pseudo_container}></div>)}
  </>
  )
};

export default HomePage;


