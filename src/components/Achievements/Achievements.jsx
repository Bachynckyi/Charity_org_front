import React, {useEffect, useState} from 'react';
import scss from './Achievements.module.scss';
import union from '../../images/Union_yellow.png';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

const Achievements = ({achievements}) => {
  const [language, setLanguage] = useState(i18next.language);
  const { t } = useTranslation();

  useEffect(() => {
    setLanguage(i18next.language);
    // eslint-disable-next-line 
  },[i18next.language])

  const achievementItem = achievements.map((item) => (
    <li className={scss.achievement_item} key={item._id}>
      <span className={scss.achievement_box}>{item.text}</span>
      <span className={scss.achievement_text}>{language === "uk" ? (item.titleUKR) : (item.titleENG)}</span>
    </li>
  ));

  return (
    <>
      {Object.keys(achievements).length !== 0 && (
        <div className={scss.background_container}>
        <div className={scss.container}>
          <img src={union} alt="union" className={scss.union}/>
          <span className={scss.title}>{t("Achievements_title")}</span>
          <ul className={scss.achievements_list}>
              {achievementItem}
          </ul>   
        </div>
      </div>
      )}
    </>
  );
};

export default Achievements;