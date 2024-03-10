import React from 'react';
import scss from './HomePage.module.scss';
import Banner from 'components/Banner/Banner';
import Mission from 'components/Mission/Mission';
import AboutUs from 'components/AboutUs/AboutUs';
import Achievements from 'components/Achievements/Achievements';
import News from 'components/News/News';
import Partners from 'components/Partners/Partners';

const HomePage = () => {

  return (
    <div className={scss.container}>
      <Banner/>
      <Mission/>
      <AboutUs/>
      <Achievements/>
      <News/>
      <Partners/>
    </div>
  );
};

export default HomePage;