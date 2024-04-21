import React, { useState }from 'react';
import scss from "./HelpRequestPage.module.scss";
import HelpRequestIndividual from 'components/HelpRequests/HelpRequestIndividual/HelpRequestIndividual';
import HelpRequestOrganization from 'components/HelpRequests/HelpRequestOrganization/HelpRequestOrganization';

const HelpRequestPage = () => {
    const [typeRequest, setTypeRequest] = useState("Фізична особа");

    const onChange = (event) => {
        setTypeRequest(event.target.value);
    };

    return (
        <div className={scss.container}>
            <div className={scss.title_container}>
                <h1 className={scss.title}>Запросити допомогу</h1>
            </div>
            <div className={scss.wrapper}>
                <span className={scss.form_title}>Оберіть ким ви є</span>
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
                    <span className={scss.input_name}>Фізична особа</span>
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
                        <span className={scss.input_name}>Організація</span>
                    </label>
                </div>
                {typeRequest === "Фізична особа" ? 
                (<HelpRequestIndividual/>) : (<HelpRequestOrganization/>)}
            </div>
        </div>
    );
};

export default HelpRequestPage; 