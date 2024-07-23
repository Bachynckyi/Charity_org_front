import React, { useEffect, useState } from 'react';
import scss from "./NewsPage.module.scss";
import { getNews } from '../../redux/data/data-operations';
import { useDispatch } from 'react-redux';
import arrow_link from '../../images/arrow_link.svg';
import { NavLink } from 'react-router-dom';
import { LoaderContainer, loader } from "react-global-loader";
import GlobalLoader from '../../components/GlobalLoader/GlobalLoader';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

const NewsPage = () => {
  const [language, setLanguage] = useState(i18next.language);
  const dispatch = useDispatch();
  const [request, setRequest] = useState([]);
  const [loading, setLoading] = useState(false); 
  const [skip, setSkip] = useState(0);
  const { t } = useTranslation();

  useEffect(() => {
  loader.show();
  setLoading(true);
  document.body.style.overflowY = 'hidden';
   dispatch(getNews(skip))
      .then(response => {
        setRequest(prevState => [...prevState, ...response.payload]);
        setTimeout(() => {
          setLoading(false);
          document.body.style.overflowY = 'scroll';
          loader.hide();
        }, 1200);
      })
  }, [dispatch, skip]);

  useEffect(() => {
    setLanguage(i18next.language);
    // eslint-disable-next-line 
  },[i18next.language])

  const newsItem = request.map((item) => (
    <NavLink to={`/news/${item._id}`} key={item._id} className={scss.news_item}>
      <img src={item.image} alt="news" className={scss.photo}/>
      <div className={scss.description_container}>
            <span className={scss.description}>{language === "uk" ? (item.title_UKR) : (item.title_ENG)}</span>
            <div className={scss.date_container}>
                <span className={scss.date}>{item.date.split(",")[0]}</span>
                  <img src={arrow_link} alt='arrow_link' className={scss.arrow_image}/>
            </div>
      </div>
    </NavLink>
  ));

  return (
    <>
      <LoaderContainer>
        <GlobalLoader/>
      </LoaderContainer>
      <div className ={scss.container}>
        <div className={scss.title_container}>
            <span className={scss.title}>{t("News")}</span>
        </div>
        {loading !== true && (
            <motion.div
            transition={{ duration: 0.4}}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}>
              {Object.keys(request).length !== 0 ? (
                <ul className={scss.news_list}>
                  {newsItem}
                </ul>
                ) : (<div className={scss.wrapper}></div>)}

              {Number.isInteger(Object.keys(request).length/10) && 
              <div className={scss.button_wrapper}>
                <button type="button" className={scss.button} onClick={() => setSkip(skip + 10)}>Показати більше</button>
              </div>
              }
            </motion.div>
        )}
      </div>
    </>
  );
};

export default NewsPage; 