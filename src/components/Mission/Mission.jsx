import React from 'react';
import scss from './Mission.module.scss';
import photo_team from '../../images/Photo_team.png';
import union from '../../images/Union.png';

const Mission = () => {

  return (
    <div className={scss.container}>
        <div className={scss.description}>
            <span className={scss.title}>НАША МІСІЯ</span>
            <span className={scss.text}>Ми - команда серця і доброти, об'єднана однією метою - надавати допомогу військовим, цивільним та тим, хто потребує цього найбільше. Наша місія полягає в тому, щоб допомогти забезпечити мир, процвітання та свободу в нашій державі, де кожен матиме можливість на щасливе та безпечне життя. Ми віримо, що рука допомоги може змінити долю Україну та  здобути перемогу.</span>
        </div>
        <div className={scss.photo_container}>
            <img src={photo_team} alt="photo_team" className={scss.photo}/>
            <img src={union} alt="union" className={scss.union}/>
        </div>
    </div>
  );
};

export default Mission;