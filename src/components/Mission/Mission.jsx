import React from 'react';
import scss from './Mission.module.scss';
import photo_team from '../../images/Photo_team.jpg';
import { useTranslation } from 'react-i18next';

const Mission = () => {
  const { t } = useTranslation();

  return (
    <div className={scss.main_container}>
      <div className={scss.background_container}>
        <div className={scss.container}>
          <div className={scss.description}>
              <span className={scss.title}>{t("Mission_title")}</span>
              <span className={scss.text}>{t("Mission_text")}</span>
          </div>
          <div className={scss.photo_container}>
              <img src={photo_team} alt="photo_team" className={scss.photo}/>
              <span className={scss.union}></span>
              <span className={scss.union_tranform}></span>
          </div>
        </div>
      </div>
      <span className={scss.ellipse_1}></span>
      {/* <img src={ellipse_1} alt="ellipse_1" className={scss.ellipse_1}/> */}
    </div>

  );
};

export default Mission;