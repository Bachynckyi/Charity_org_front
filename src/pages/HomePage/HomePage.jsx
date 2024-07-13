import React, {useEffect} from 'react';
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
import { isLoadingData } from '../../redux/data/data-selectors';
import { useSelector } from 'react-redux';

const HomePage = () => {
  const loading = useSelector(isLoadingData);

  useEffect(() => {
    loader.show();
    document.body.style.overflowY = 'hidden';
    if(loading === false) {
      setTimeout(() => {
        document.body.style.overflowY = 'scroll';
        loader.hide();
      }, 600);
    }
  }, [loading]);

  return (
    <>
    {loading === true && (
      <LoaderContainer>
        <GlobalLoader/>
      </LoaderContainer>
    )}
      <div className={scss.container}>
          <Banner/>
          <Mission/>
          <AboutUs/>
          <Achievements/>
          <News/>
          <SliderPartner/>
          <Partners/>
      </div>
    </>


  );
};

export default HomePage;