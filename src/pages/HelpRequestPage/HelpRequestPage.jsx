import React, { useState }from 'react';
import scss from "./HelpRequestPage.module.scss";
import HelpRequestIndividual from 'components/HelpRequests/HelpRequestPrivat/HelpRequestPrivat';
import HelpRequestOrganization from 'components/HelpRequests/HelpRequestOrganization/HelpRequestOrganization';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const HelpRequestPage = () => {
    const { t } = useTranslation();
    const [typeRequest, setTypeRequest] = useState("Фізична особа");

    const onChange = (event) => {
        setTypeRequest(event.target.value);
    };

    return (
        <motion.div
        transition={{ duration: 0.4}}
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}>
            <div className={scss.container}>
                <div className={scss.title_container}>
                    <h1 className={scss.title}>{t("HelpRequest_title")}</h1>
                </div>
                <div className={scss.wrapper}>
                    <span className={scss.form_title}>{t("HelpRequest_form_title")}</span>
                    <div className={scss.form_selector}>
                        <label className={scss.input_option} htmlFor="individual"> 
                        <input
                            className={scss.radio_button}
                            type="radio"
                            id="individual"
                            name="typeRequest"
                            value="Фізична особа"
                            checked={typeRequest === "Фізична особа"}
                            onChange={onChange}
                        />
                        <span className={scss.custom_button}></span>
                        <span className={scss.input_name}>{t("HelpRequest_input_name")}</span>
                        </label>
                        <label className={scss.input_option} htmlFor="organization"> 
                            <input
                                className={scss.radio_button}
                                type="radio"
                                id="organization"
                                name="typeRequest"
                                value="Організація"
                                onChange={onChange}
                            />
                            <span className={scss.custom_button}></span>
                            <span className={scss.input_name}>{t("HelpRequest_input_name1")}</span>
                        </label>
                    </div>
                    {typeRequest === "Фізична особа" ? 
                    (<HelpRequestIndividual/>) : (<HelpRequestOrganization/>)}
                </div>
            </div>
        </motion.div>
    );
};

export default HelpRequestPage; 