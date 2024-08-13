import React, {useEffect, useState} from 'react';
import scss from './News.module.scss';
import { NavLink } from 'react-router-dom';
import arrow_link from '../../images/arrow_link.svg';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

const News = ({lastNews}) => {
  const [language, setLanguage] = useState(i18next.language);
  const { t } = useTranslation();

  useEffect(() => {
    setLanguage(i18next.language);
    // eslint-disable-next-line 
  },[i18next.language])

  const newsItem = lastNews.map((item) => (
    <NavLink className={scss.news_item} key={item._id} to={`/news/${item._id}`}>
      <img src={item.image} alt="news" className={scss.photo}/>
        <div className={scss.description_container}>
            <span className={scss.description}>{language === "uk" || language === "ru" ? (item.title_UKR) : (item.title_ENG)}</span>
            <div className={scss.date_container}>
                <span className={scss.date}>{item.date.split(",")[0]}</span>
                <img src={arrow_link} alt='arrow_link' className={scss.arrow_link} />
            </div>
        </div>
    </NavLink>
  ));

  return (
    <>
      {Object.keys(lastNews).length !== 0 && (
        <div className={scss.container}>
          <span className={scss.title}>{t("News")}</span>
          <ul className={scss.news_list}>
              {newsItem}
          </ul>
        </div>
      )}
    </>
  );
};

export default News;