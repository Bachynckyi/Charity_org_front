import React from 'react';
import scss from './AboutUs.module.scss';
import { NavLink } from 'react-router-dom';
import union from '../../images/Union_yellow.png';

const AboutUs = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={scss.container}>
        <div className={scss.description}>
          <h1 className={scss.title}>Про фонд</h1>
          <div className={scss.paragraphs}>
            <img src={union} alt="union" className={scss.union}/>
            <span className={scss.text}>БФ Unity Horizon - це неприбуткова організація, заснована з метою подолання складних викликів, з якими стикаються військові та цивільні в умовах війни. Від допомоги у цей важкий час до створення можливостей для зростання і розвитку - ми присвячені тому, щоб допомагати людям будувати краще майбутнє.</span>
            <span className={scss.text}>Наша команда здійснює широкий спектр благодійних програм, спрямованих на різноманітні виклики війни: допомога військовим, людям, які постраждали від війни, підтримка освітніх проектів та різноманітних ініціатив, спрямованих на розвиток нашого суспільства.</span>
            <span className={scss.text}>Об'єднавши відданих та пристрасних волонтерів - ми  працюємо на кожному рівні, щоб допомогти захистити державність то свободу України</span>
          </div>
        </div>
        <div className={scss.links_container}>
          <NavLink to="/offer" className={scss.support_link} onClick={scrollToTop}>
            Підтримати
          </NavLink>
          <NavLink to="/about" className={scss.read_link} onClick={scrollToTop}>
            Читати про фонд
          </NavLink>
        </div>
    </div>
  );
};

export default AboutUs; 