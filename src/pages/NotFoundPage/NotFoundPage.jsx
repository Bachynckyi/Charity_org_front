import React from 'react';
import scss from './NotFoundPage.module.scss';

const AboutPage = () => {

  return (
    <div className={scss.container}>
        <div className={scss.title_container}>
            <span className={scss.title}>Вибачте, сталася помилка !</span>
        </div>
        <div className={scss.text_container}>
            <p className={scss.text}>Сторінку, яку ви шукаєте, не знайдено. Можливо, вона була переміщена або видалена.</p>
        </div>
    </div>
  );
};

export default AboutPage;