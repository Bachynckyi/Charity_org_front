import React from 'react';
import scss from './HomePage.module.scss';
import Navigation from 'components/Navigation/Navigation';
import Banner from 'components/Banner/Banner';
import Mission from 'components/Mission/Mission';
import AboutUs from 'components/AboutUs/AboutUs';
import Achievements from 'components/Achievements/Achievements';
import News from 'components/News/News';

const HomePage = () => {

  return (
    <div className={scss.container}>
      <Navigation/>
      <Banner/>
      <Mission/>
      <AboutUs/>
      <Achievements/>
      <News/>
    </div>
  );
};

export default HomePage;