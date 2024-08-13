import React, {useEffect, useState} from 'react';
import scss from './Achievements.module.scss';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

const Achievements = ({achievements}) => {
  const [language, setLanguage] = useState(i18next.language);
  const { t } = useTranslation();

  useEffect(() => {
    setLanguage(i18next.language);
    // eslint-disable-next-line 
  },[i18next.language])

  const achievementItemUKR = achievements.map((item) => (
    <li className={scss.achievement_item} key={item._id}>
      <span className={scss.achievement_box}>{item.text}</span>
      <span className={scss.achievement_text}>{item.titleUKR}</span>
    </li>
  ));

  const achievementItemENG = achievements.map((item) => (
    <li className={scss.achievement_item} key={item._id}>
      <span className={scss.achievement_box}>{item.text}</span>
      <span className={scss.achievement_text}>{item.titleENG}</span>
    </li>
  ));

  return (
    <>
      {Object.keys(achievements).length !== 0 && (
        <div className={scss.background_container}>
        <div className={scss.container}>
          <span className={scss.union}></span>
          <span className={scss.title}>{t("Achievements_title")}</span>
          <ul className={scss.achievements_list}>
              {language === "uk" || language === "ru" ? (achievementItemUKR) : (achievementItemENG)}
          </ul>   
        </div>
      </div>
      )}
    </>
  );
};

export default Achievements;