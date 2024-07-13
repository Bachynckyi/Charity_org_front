import React from 'react';
import scss from "./DocumentPage.module.scss";
import { Link } from 'react-router-dom';
import arrow_link_white from '../../images/arrow_link_white.svg';

const DocumentPage = () => {

  return (
    <div className={scss.container}>
      <div className={scss.title_container}>
        <span className={scss.title}>Документи</span>
      </div>
      <div className={scss.content_container}>
          <h2 className={scss.subtitle}>Документація для ознайомлення</h2>
          <p className={scss.text}>Ознайомитись з установчими документами фонду або завантажити логотип фонду для комунікації в рамках партнерства ви можете за <b>посиланням</b>.</p>
          <Link className={scss.link} to="https://drive.google.com/drive/folders/1SSSEgXtQ5yqrJx87opcSiEZ9T_YLFewf?usp=sharing" target="_blank">
            <span>ОЗНАЙОМИТИСЬ</span>
            <img src={arrow_link_white} alt='arrow_link' className={scss.arrow_link}/>
          </Link>
      </div>
    </div>
  );
};

export default DocumentPage; 