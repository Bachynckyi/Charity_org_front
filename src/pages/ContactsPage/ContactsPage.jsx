import React from 'react';
import scss from "./ContactsPage.module.scss";
import ContactForm from 'components/ContactForm/ContactForm';
import { motion } from 'framer-motion';

const ContactsPage = () => {

    return (
    <motion.div
        transition={{ duration: 0.4}}
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}>
        <div className={scss.container}>
            <div className={scss.title_container}>
                <span className={scss.title}>Наші контакти</span>
            </div>
            <div className={scss.content_container}>
                <div className={scss.contacts_container}>
                    <p className={scss.contact_name}>Юридична адреса:</p>
                    <address className={scss.address}>Україна, 09801, Київська обл., Білоцерківський р-н, місто Тетіїв, вул.Центральна, будинок 105А</address>
                    <p className={scss.contact_name}>Електронна пошта:</p>
                    <a className={scss.contact_link} href='mailto: unityhorizon@gmail.com'>unityhorizon@gmail.com</a>
                    <p className={scss.contact_name}>Телефон:</p>
                    <a className={scss.contact_link} href='tel: +38093703808'>+38 (093) 703 80 08</a>
                    <p className={scss.contact_name}>Ідентифікаційний код юридичної особи:</p>
                    <p className={scss.contact_link}>45502942</p>
                </div>
                <ContactForm/>
            </div>
        </div>
    </motion.div>
  );
};

export default ContactsPage; 