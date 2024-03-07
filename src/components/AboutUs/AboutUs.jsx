import React from 'react';
import scss from './AboutUs.module.scss';
import { NavLink } from 'react-router-dom';
import union from '../../images/Union.png';

const AboutUs = () => {

  return (
    <div className={scss.container}>
        <div className={scss.description}>
          <h1 className={scss.title}>Про фонд</h1>
          <div className={scss.paragraphs}>
            <img src={union} alt="union" className={scss.union}/>
            <span className={scss.text}>Ми - неприбуткова організація, заснована з метою подолання складних викликів, з якими стикаються військові та цивільні в умовах підло розв'язаної проти України війни. Від допомоги у цей важкий час до створення можливостей для зростання і розвитку - ми присвячені тому, щоб допомагати людям будувати краще майбутнє.</span>
            <span className={scss.text}>Ми здійснюємо широкий спектр благодійних програм, спрямованих на різноманітні виклики війни. Чи це допомога військовим, чи матеріальна допомога для сімей, які постраждали від агресора, підтримка освітніх проектів, чи ініціативи, спрямовані на розвиток нашого суспільства - ми працюємо на кожному рівні та прагнемо закріпити державність в усіх можливих площинах.</span>
            <span className={scss.text}>Наш успіх - це результат трудової роботи і відданості нашої команди. Ми об'єднуємо талановитих та пристрасних професіоналів, які діляться спільною метою - допомогти захистити державність України. Кожен учасник нашої команди відзначається великим досвідом та високим рівнем відданості.</span>
          </div>
        </div>
        <div className={scss.links_container}>
          <NavLink className={scss.support_link}>
            Підтримати
          </NavLink>
          <NavLink className={scss.read_link}>
            Читати про фонд
          </NavLink>
        </div>
    </div>
  );
};

export default AboutUs; 