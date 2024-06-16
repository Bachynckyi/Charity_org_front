import React, { useEffect, useState } from 'react';
import scss from './Achievements.module.scss';
import union from '../../images/Union_yellow.png';
import { getAchievements } from '../../redux/data/data-operations';
import { useDispatch } from 'react-redux';

const Achievements = () => {
  const dispatch = useDispatch();
  const [request, setRequest] = useState([]);

  useEffect(() => {
    dispatch(getAchievements())
      .then(response => setRequest(response.payload));
  }, [dispatch]);

  const achievementItem = request.map((item) => (
    <li className={scss.achievement_item} key={item._id}>
      <span className={scss.achievement_box}>{item.text}</span>
      <span className={scss.achievement_text}>{item.title}</span>
    </li>
  ));

  return (
    <div className={scss.background_container}>
      <div className={scss.container}>
        <img src={union} alt="union" className={scss.union}/>
        <span className={scss.title}>Досягнення</span>
        <ul className={scss.achievements_list}>
            {achievementItem}
        </ul>   
      </div>
    </div>
  );
};

export default Achievements;