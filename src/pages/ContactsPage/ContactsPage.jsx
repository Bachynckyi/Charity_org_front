import React from 'react';
import scss from "./ContactsPage.module.scss";
import ContactForm from 'components/ContactForm/ContactForm';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const ContactsPage = () => {
    const { t } = useTranslation();

    return (
    <motion.div
        transition={{ duration: 0.4}}
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}>
        <div className={scss.container}>
            <div className={scss.title_container}>
                <span className={scss.title}>{t("ContactsPage_title")}</span>
            </div>
            <div className={scss.content_container}>
                <div className={scss.contacts_container}>
                    <p className={scss.contact_name}>{t("ContactsPage_contact_name")}</p>
                    <address className={scss.address}>{t("ContactsPage_address")}</address>
                    <p className={scss.contact_name}>{t("ContactsPage_contact_name1")}</p>
                    <a className={scss.contact_link} href='mailto: unityhorizon@gmail.com'>unityhorizon@gmail.com</a>
                    <p className={scss.contact_name}>{t("ContactsPage_contact_name2")}</p>
                    <a className={scss.contact_link} href='tel: +38093703808'>+38 (093) 703 80 08</a>
                    <p className={scss.contact_name}>{t("ContactsPage_contact_name3")}</p>
                    <p className={scss.contact_link}>45502942</p>
                </div>
                <ContactForm/>
            </div>
        </div>
    </motion.div>
  );
};

export default ContactsPage; 