import React from 'react';
import scss from "./DocumentPage.module.scss";
import { Link } from 'react-router-dom';
import arrow_link_white from '../../images/arrow_link_white.svg';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const DocumentPage = () => {
  const { t } = useTranslation();

  return (
    <motion.div
    transition={{ duration: 0.4}}
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}>
      <div className={scss.container}>
        <div className={scss.title_container}>
          <span className={scss.title}>{t("DocumentPage_title")}</span>
        </div>
        <div className={scss.content_container}>
            <h2 className={scss.subtitle}>{t("DocumentPage_subtitle")}</h2>
            <p className={scss.text}>{t("DocumentPage_text")}<b>{t("DocumentPage_text1")}</b>.</p>
            <Link className={scss.link} to="https://drive.google.com/drive/folders/1SSSEgXtQ5yqrJx87opcSiEZ9T_YLFewf?usp=sharing" target="_blank">
              <span>{t("DocumentPage_link")}</span>
              <img src={arrow_link_white} alt='arrow_link' className={scss.arrow_link}/>
            </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default DocumentPage; 