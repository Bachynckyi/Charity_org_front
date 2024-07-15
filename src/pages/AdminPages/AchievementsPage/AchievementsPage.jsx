import React, { useEffect, useState, useCallback } from 'react';
import scss from "./AchievementsPage.module.scss";
import NotForMobileDevices from 'components/NotForMobileDevices/NotForMobileDevises';
import { useDispatch, useSelector } from 'react-redux';
import { accessToken } from '../../../redux/user/user-selectors';
import { checkUser } from '../../../redux/user/user-operations';
import { getAchievements } from '../../../redux/data/data-operations';
import { Link } from 'react-router-dom';
import { editAchievements } from '../../../redux/data/data-operations';
import { motion } from 'framer-motion';

const AchievementsPage = () => {
  const dispatch = useDispatch();
  const token = useSelector(accessToken);
  const [request, setRequest] = useState([]);

  useEffect(() => {
    dispatch(getAchievements())
      .then(response => setRequest(response.payload));
  }, [dispatch]);

  const handleChange = useCallback(({target}) => {
    const {name, value, id} = target;
    setRequest((prevState) => 
      prevState.map(item => {
        if(item._id === id) {
          return {...item, [name]: value}
        }
        else {
          return item
        }
      }
      ))
  }, [setRequest]);

  const handleSubmit = () => {
    dispatch(editAchievements({token, request}))
      .then(response => {
        if(response.payload === 401){
            dispatch(checkUser())
              .then(response => {
                if(response.payload !== 401){
                  const token = response.payload.accessToken;
                  dispatch(editAchievements({token, request}));
                }
              })   
        }
      }) 
  };

  const achievementItem = request.map((item) => (
    <li className={scss.achievement_item} key={item._id}>
      <input
        className={scss.achievement_box}
        required
        id={item._id}
        name="text"
        value={item.text}
        onChange={handleChange}
        type='text'
        />
      <input
        className={scss.achievement_text}
        required
        id={item._id}
        name="title"
        value={item.title}
        onChange={handleChange}
        type='text'
        />
    </li>
  ));

  return (
    <motion.div
        transition={{ duration: 0.4}}
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}>
        <div className={scss.container}>
          <div className={scss.title_container}>
              <span className={scss.title}>Редагування досягнень</span>
          </div>
          <div className={scss.content_container}>
            <ul className={scss.achievements_list}>
              {achievementItem}
            </ul>
            <p className={scss.info_text}>Відкоригуйте необхідні значення та натисність кнопку "Оновити"</p>
            <div className={scss.buttons_container}>
              <button type='button' className={scss.button} onClick={handleSubmit}>Оновити</button>
              <Link type='button' className={scss.button_menu} to="/admin/panel">Повернутись до меню</Link>
            </div>
          </div>
        </div>
        <NotForMobileDevices/>
    </motion.div>

  );
};

export default AchievementsPage; 