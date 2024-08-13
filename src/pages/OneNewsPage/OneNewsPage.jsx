import React, { useEffect, useState } from 'react';
import scss from "./OneNewsPage.module.scss";
import { useDispatch } from 'react-redux';
import { getNewsById } from '../../redux/data/data-operations';
import { useParams } from 'react-router-dom';
import { LoaderContainer, loader } from "react-global-loader";
import GlobalLoader from '../../components/GlobalLoader/GlobalLoader';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';
import { motion } from 'framer-motion';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';

const OneNewsPage = () => {
  const [language, setLanguage] = useState(i18next.language);
  const dispatch = useDispatch();
  const [request, setRequest] = useState([]);
  const newsId = useParams();
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState(false);
  // eslint-disable-next-line 
  const { t } = useTranslation();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    scrollToTop();
    loader.show();
    setLoading(true);
    document.body.style.overflowY = 'hidden';
    dispatch(getNewsById(newsId.id))
      .then(response => { 
        if(response.payload === 404 || response.payload === 500) {
        setTimeout(() => {
          setError(true);
          setLoading(false);
          document.body.style.overflowY = 'scroll';
          loader.hide();
        }, 800);
        }
        else {
          setRequest(response.payload);
          setTimeout(() => {
            setLoading(false);
            document.body.style.overflowY = 'scroll';
            loader.hide();
          }, 800);
        }
        });
// eslint-disable-next-line
  }, [dispatch]);

  useEffect(() => {
    setLanguage(i18next.language);
    // eslint-disable-next-line 
  },[i18next.language])

  
  return (
    <>
      <LoaderContainer>
        <GlobalLoader/>
      </LoaderContainer>
      {loading !== true ? (
        <>  
          {error === true ? (
          <NotFoundPage/>
          ) : (
            <motion.div
            transition={{ duration: 0.4}}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}>
                {Object.keys(request).length !== 0 && ( 
                  <div className ={scss.container}>
                    <h1 className={scss.title}>{language === "uk" || language === "ru" ? (request.title_UKR) : (request.title_ENG)}</h1>
                    <span className={scss.date}>{request.date.split(",")[0]}</span>
                    <div className={scss.wrapper}>
                        <img src={request.image} alt="news" className={scss.photo}/>
                        <span className={scss.text}>{language === "uk" || language === "ru"? (request.text_UKR) : (request.text_ENG)}</span>
                    </div>
                  </div>
              )}
            </motion.div>
          )}
        </>
      ) : (
        <div className={scss.pseudo_container}></div>
      )}
    </>
  );
};

export default OneNewsPage; 