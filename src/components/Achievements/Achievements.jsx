import React from 'react';
import scss from './Achievements.module.scss';
import union from '../../images/Union.png';

const Achievements = () => {

  return (
    <div className={scss.container}>
      <img src={union} alt="union" className={scss.union}/>
      <span className={scss.title}>Досягнення</span>
      <ul className={scss.achievements_list}>
          <li className={scss.achievement_item}>
            <span className={scss.achievement_box}>25+</span>
            <span className={scss.achievement_text}>АВТО</span>
          </li>
          <li className={scss.achievement_item}>
            <span className={scss.achievement_box}>25+</span>
            <span className={scss.achievement_text}>АВТО</span>
          </li>
          <li className={scss.achievement_item}>
            <span className={scss.achievement_box}>25+</span>
            <span className={scss.achievement_text}>АВТО</span>
          </li>
          <li className={scss.achievement_item}>
            <span className={scss.achievement_box}>25+</span>
            <span className={scss.achievement_text}>АВТО</span>
          </li>
          <li className={scss.achievement_item}>
            <span className={scss.achievement_box}>25+</span>
            <span className={scss.achievement_text}>АВТО</span>
          </li>
      </ul>   
    </div>
  );
};

export default Achievements;