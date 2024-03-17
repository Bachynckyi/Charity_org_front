import React from 'react';
import scss from './AboutPage.module.scss';
import Partners from 'components/Partners/Partners';
import stamp from '../../images/Stamp.png';
import photo_team from '../../images/Photo_team.png';
import union from '../../images/Union_blue.png';
import ellipse from '../../images/ellipse_2.png'
import phone from '../../images/phone.svg';
import handshake from '../../images/handshake.svg';
import star from '../../images/star.svg';
import person_add from '../../images/person_add.svg';

const AboutPage = () => {

  return (
    <div className={scss.container}>
      <div className={scss.tagline_container}>
        <div className={scss.tagline_title_container}>
          <span className={scss.tagline_title}>Ми - </span>
          <span className={scss.tagline_title_blue}>команда серця і </span> 
          <span className={scss.tagline_title_yellow}>доброти, </span>
          <span className={scss.tagline_title}>об'єднана однією метою - надавати допомогу військовим, цивільним та тим, хто потребує цього найбільше.
          </span>
        </div>
        <p className={scss.tagline_text}>Ми здійснюємо широкий спектр благодійних програм, спрямованих на різноманітні виклики війни.</p>
        <p className={scss.tagline_text}>Ми працюємо на кожному рівні та прагнемо закріпити державність в усіх можливих площинах.</p>
        <p className={scss.tagline_text}>Наш успіх - це результат трудової роботи і відданості нашої команди. Ми об'єднуємо талановитих та пристрасних професіоналів, які діляться спільною метою.</p>
      </div>
      <div className={scss.road}>
          <span className={scss.road_title}>Як ми працюємо</span>
            <div className={scss.road_item}>
                <div className={scss.road_item_circle}>
                  <img src={phone} alt="phone" className={scss.road_item_image}/>
                </div>
                <div className={scss.road_item_description}>
                  <p className={scss.road_item_title}>Зв’язок</p>
                  <p className={scss.road_item_text}>Направлення заявки про отримання того чи іншого виду допомоги</p>
                </div>
            </div>
            <div className={scss.road_item}>
                <div className={scss.road_item_circle}>
                  <img src={person_add} alt="person_add" className={scss.road_item_image}/>
                </div>
                <div className={scss.road_item_description}>
                  <p className={scss.road_item_title}>Опрацювання заявки</p>
                  <p className={scss.road_item_text}>Визначення відповідального учасника</p>
                </div>
            </div>
            <div className={scss.road_item}>
                <div className={scss.road_item_circle}>
                  <img src={star} alt="star" className={scss.road_item_image}/>
                </div>
                <div className={scss.road_item_description}>
                  <p className={scss.road_item_title}>Збір коштів</p>
                  <p className={scss.road_item_text}>Організація збору коштів, або їх виділення наказом директора за наявності коштів</p>
                </div>
            </div>
            <div className={scss.road_item}>
                <div className={scss.road_item_circlelast}>
                  <img src={handshake} alt="handshake" className={scss.road_item_image}/>
                </div>
                <div className={scss.road_item_description}>
                  <p className={scss.road_item_title}>Надання допомоги</p>
                  <p className={scss.road_item_text}>Надання запитуваної допомоги набувачу благодійної допомоги за актом приймання-передачі</p>
                </div>
            </div>
      </div>
      <div className={scss.memories_container}>
        <div className={scss.memories_container_photo}>
          <img src={photo_team} alt='photo_team' className={scss.photo_team}/>
          <img src={union} alt='union_blue' className={scss.union_blue_bottom}/>
          <img src={union} alt='union_blue' className={scss.union_blue_top}/>
        </div>
        <div className={scss.memories_container_text}>
            <p className={scss.memories_target}>Мета Фонду 
              <span className={scss.memories_blue}> "Горизонт </span>
              <span className={scss.memories_yellow}>Єдності" </span> 
              полягає у наданні допомоги тим, хто потребує підтримки найбільше, зокрема, учасникам війни, постраждалим від конфліктів, сім'ям загиблих та поранених, а також іншим групам вразливих людей. 
            </p>
            <p className={scss.memories_text_result}>Основні цілі фонду включають:</p>
            <p className={scss.memories_text}>1. Надання гуманітарної допомоги: забезпечення життєво необхідними товарами, медичним обладнанням, харчами та іншими ресурсами для тих, хто опинився у скрутних обставинах.</p>
            <p className={scss.memories_text}>2. Психологічна підтримка: надання консультацій та психологічної допомоги тим, хто пережив травматичні події або стикається зі стресом через воєнний конфлікт.</p>
            <p className={scss.memories_text}>3. Соціальна реабілітація: допомога у відновленні після війни, включаючи підтримку у навчанні, професійному розвитку та інтеграції до суспільства.</p>
            <p className={scss.memories_text}>4. Створення спільноти підтримки: об'єднання зусиль та ресурсів для сприяння солідарності та взаємодопомозі серед всіх учасників фонду.</p>
            <p className={scss.memories_text_result}>Загалом, цілі фонду спрямовані на створення кращого майбутнього для тих, хто потребує допомоги, і сприяння єднанню громадян навколо важливих гуманітарних цінностей.</p>
        </div>
      </div>
      <img src={stamp} alt="stamp" className={scss.image_stamp}/>
      <img src={ellipse} alt="ellipse" className={scss.image_ellipse}/>
      <Partners/>
    </div>
  );
};

export default AboutPage;