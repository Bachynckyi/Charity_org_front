import React from 'react';
import scss from './Mission.module.scss';
import photo_team from '../../images/Photo_team.jpg';
import union from '../../images/Union_yellow.png';
import ellipse_1 from '../../images/ellipse_1.png';
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
              <img src={union} alt="union" className={scss.union}/>
              <img src={union} alt="union_tranform" className={scss.union_tranform}/>
          </div>
        </div>
      </div>
      <img src={ellipse_1} alt="ellipse_1" className={scss.ellipse_1}/>
    </div>

  );
};

export default Mission;