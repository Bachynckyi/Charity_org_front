import React from 'react';
import scss from './NotFoundPage.module.scss';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const NotFoundPage = () => {
  const { t } = useTranslation();

  return (
    <motion.div
    transition={{ duration: 0.4}}
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}>
      <div className={scss.container}>
          <div className={scss.title_container}>
              <span className={scss.title}>{t("PageNotFound_title")}</span>
          </div>
          <div className={scss.text_container}>
              <p className={scss.text}>{t("PageNotFound_text1")}</p>
              <p className={scss.text}>{t("PageNotFound_text2")}</p>
          </div>
      </div>
    </motion.div>
  );
};

export default NotFoundPage;