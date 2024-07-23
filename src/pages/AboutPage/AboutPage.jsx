import React from 'react';
import scss from './AboutPage.module.scss';
import Partners from 'components/Partners/Partners';
import photo_team from '../../images/Photo_team.jpg';
import union_blue from '../../images/Union_blue.png';
import union_yellow from '../../images/Union_yellow.png'
import ellipse from '../../images/ellipse_2.png';
import phone from '../../images/phone.svg';
import handshake from '../../images/handshake.svg';
import star from '../../images/star.svg';
import person_add from '../../images/person_add.svg';
import stamp from '../../images/stamp_image.png';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <motion.div
        transition={{ duration: 0.4}}
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}>
      <div className={scss.background_container}> 
          <div className={scss.container}>
            <div className={scss.tagline_container}>
              <div className={scss.tagline_title_container}>
                <span className={scss.tagline_title}>{t("AboutPage_tagline_title")}</span>
                <span className={scss.tagline_title_blue}>{t("AboutPage_tagline_title_blue")}</span> 
                <span className={scss.tagline_title_yellow}>{t("AboutPage_tagline_title_yellow")}</span>
                <span className={scss.tagline_title}>{t("AboutPage_tagline_title1")}</span>
              </div>
              <div className={scss.tagline_text_container}>
              <p className={scss.tagline_text}>{t("AboutPage_tagline_text")}</p>
              <p className={scss.tagline_text}>{t("AboutPage_tagline_text1")}</p>
              <p className={scss.tagline_text}>{t("AboutPage_tagline_text2")}</p>
              </div>
            </div>
            <div className={scss.road}>
                <span className={scss.road_title}>{t("AboutPage_road_title")}</span>
                <div className={scss.road_item}>
                    <div className={scss.road_item_circle}>
                      <img src={phone} alt="phone" className={scss.road_item_image}/>
                    </div>
                    <div className={scss.road_item_description}>
                      <p className={scss.road_item_title}>{t("AboutPage_road_item_title")}</p>
                      <p className={scss.road_item_text}>{t("AboutPage_road_item_text")}</p>
                    </div>
                </div>
                <div className={scss.road_item}>
                    <div className={scss.road_item_circle}>
                      <img src={person_add} alt="person_add" className={scss.road_item_image}/>
                    </div>
                    <div className={scss.road_item_description}>
                      <p className={scss.road_item_title}>{t("AboutPage_road_item_title1")}</p>
                      <p className={scss.road_item_text}>{t("AboutPage_road_item_text1")}</p>
                    </div>
                </div>
                <div className={scss.road_item}>
                    <div className={scss.road_item_circle}>
                      <img src={star} alt="star" className={scss.road_item_image}/>
                    </div>
                    <div className={scss.road_item_description}>
                      <p className={scss.road_item_title}>{t("AboutPage_road_item_title2")}</p>
                      <p className={scss.road_item_text}>{t("AboutPage_road_item_text2")}</p>
                    </div>
                </div>
                <div className={scss.road_item}>
                    <div className={scss.road_item_circlelast}>
                      <img src={handshake} alt="handshake" className={scss.road_item_image}/>
                    </div>
                    <div className={scss.road_item_description}>
                      <p className={scss.road_item_title}>{t("AboutPage_road_item_title3")}</p>
                      <p className={scss.road_item_text}>{t("AboutPage_road_item_text3")}</p>
                    </div>
                </div>
            </div>
            <div className={scss.memories_container}>
              <div className={scss.memories_container_photo}>
                <img src={photo_team} alt='photo_team' className={scss.photo_team}/>
                <img src={union_blue} alt='union_blue' className={scss.union_blue_bottom}/>
                <img src={union_blue} alt='union_blue' className={scss.union_blue_top}/>
                <img src={union_yellow} alt='union_yellow' className={scss.union_yellow_bottom}/>
                <img src={union_yellow} alt='union_yellow' className={scss.union_yellow_top}/>
              </div>
              <div className={scss.memories_container_text}>
                  <p className={scss.memories_text_result}>{t("AboutPage_memories_text_result")}</p>
                  <p className={scss.memories_text}>1. {t("AboutPage_memories_text")}</p>
                  <p className={scss.memories_text}>2. {t("AboutPage_memories_text1")}</p>
                  <p className={scss.memories_text}>3. {t("AboutPage_memories_text2")}</p>
                  <p className={scss.memories_text}>4. {t("AboutPage_memories_text3")}</p>
                  <p className={scss.memories_text_result}>{t("AboutPage_memories_text_result1")}</p>
              </div>
            </div>
            <Partners/>
          </div>
          <img src={stamp} alt="stamp" className={scss.image_stamp}/>
          <img src={ellipse} alt="ellipse" className={scss.image_ellipse}/>
      </div>
    </motion.div>
  )
};

export default AboutPage;