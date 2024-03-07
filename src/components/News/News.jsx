import React from 'react';
import scss from './News.module.scss';
import news1 from '../../images/News1.png';
import news2 from '../../images/News2.png';
import news3 from '../../images/News3.png';
import news4 from '../../images/News4.png';

const News = () => {

  return (
    <div className={scss.container}>
        <span className={scss.title}>Новини</span>
        <ul className={scss.news_list}>
          <li className={scss.news_item}>
            <img src={news1} alt="news" className={scss.photo}/>
            <div className={scss.description_container}>
                <span className={scss.description}>Через нічні вибухи в Одесі - собака подумала, що вона кіт і вилізла на дерево</span>
                <div>
                    <span className={scss.date}>01/02/2024</span>
                </div>
            </div>
          </li>
          <li className={scss.news_item}>
            <img src={news2} alt="news" className={scss.photo}/>
            <div className={scss.description_container}>
                <span className={scss.description}>Через нічні вибухи в Одесі - собака подумала, що вона кіт і вилізла на дерево</span>
                <div>
                    <span className={scss.date}>01/02/2024</span>
                </div>
            </div>
          </li>
          <li className={scss.news_item}>
            <img src={news3} alt="news" className={scss.photo}/>
            <div className={scss.description_container}>
                <span className={scss.description}>Через нічні вибухи в Одесі - собака подумала, що вона кіт і вилізла на дерево</span>
                <div>
                    <span className={scss.date}>01/02/2024</span>
                </div>
            </div>
          </li>
          <li className={scss.news_item}>
            <img src={news4} alt="news" className={scss.photo}/>
            <div className={scss.description_container}>
                <span className={scss.description}>Через нічні вибухи в Одесі - собака подумала, що вона кіт і вилізла на дерево</span>
                <div>
                    <span className={scss.date}>01/02/2024</span>
                </div>
            </div>
          </li>
        </ul>
    </div>
  );
};

export default News;