import React from 'react';
import scss from './HomePage.module.scss';
import Banner from 'components/Banner/Banner';
import AboutUs from 'components/AboutUs/AboutUs';
import ButtonSupport from 'components/ButtonSupport/ButtonSupport';
import ButtonRequest from 'components/ButtonRequest/ButtonRequest';
import Report from 'components/Report/Report';
import BankDetails from 'components/BankDetails/BankDetails';
import News from 'components/News/News';

const HomePage = () => {

  return (
    <div className={scss.container}>
        <Banner/>
        <div className={scss.buttons}>
          <ButtonSupport/>
          <ButtonRequest/>
        </div>
        <AboutUs/>
        <Report/>
        <BankDetails/>
        <News/>

    </div>
  );
};

export default HomePage;