import React, { useState, useCallback } from 'react';
import scss from "./ContactForm.module.scss";
import { useDispatch } from 'react-redux';
import {newRequestFeedback} from '../../redux/feedback/feedback-operations';
import iconfail from '../../images/icon_fail_blue.svg';
import GlobalLoader from '../GlobalLoader/GlobalLoader';
import { LoaderContainer, loader } from "react-global-loader";
import { useTranslation } from 'react-i18next';

const ContactForm = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [dispatchingStatus, setDispatchingStatus] = useState(null);

    const [request, setRequest] = useState({
        name: "",
        phone: "",
        email: "",
        comments: "",
        date: "",
    });

    const handleChange = useCallback(({target}) => {
    if(dispatchingStatus !== 201) {
        setDispatchingStatus(null);
    };
    const {name, value} = target;
    const todayDate = new Date();
    const date = todayDate.toLocaleString();
    setRequest(prevState => {
        return {...prevState, [name]: value, date: date}
    })
    }, [setRequest, dispatchingStatus]);

    const submitForm = (e) => {
        e.preventDefault();
        loader.show();
        document.body.style.overflowY = 'hidden';
        dispatch(newRequestFeedback(request))
        .then(response => {
            setDispatchingStatus(response.payload.request.status);
            setRequest({
                name: "",
                phone: "",
                email: "",
                comments: "",
                date: "",
            });
            setTimeout(() => {
                document.body.style.overflowY = 'scroll';
                loader.hide();
            }, 500);
            }
        )
    };

    return (
        <>
        <LoaderContainer>
            <GlobalLoader/>
        </LoaderContainer>
        <form className={scss.form} onSubmit={submitForm}>
            <span className={scss.form_title}>{t("ContactForm_form_title")}</span>
            <input 
                className={scss.input}
                required
                id='name'
                placeholder={t("ContactForm_input")}
                name='name'
                minLength="3"
                value={request.name}
                onChange={handleChange}
                type='text'
                autoComplete='off'
            />
            <input 
                className={scss.input}
                required
                id='phone'
                placeholder={t("ContactForm_input1")}
                name='phone'
                value={request.phone}
                onChange={handleChange}
                type='tel'
                minLength="7"
                autoComplete='off'
            />
            <input 
                className={scss.input}
                id='email'
                placeholder={t("ContactForm_input2")}
                name='email'
                value={request.email}
                onChange={handleChange}
                type='email'
                autoComplete='off'
            />
            <textarea
                id='comments'
                type='text'
                placeholder={t("ContactForm_textarea")}
                className={scss.textarea}
                name='comments'
                value={request.comments}
                onChange={handleChange}
                autoComplete='off'
            ></textarea>
            {dispatchingStatus === null ? 
                (<button type='submit' className={scss.button_submit}>{t("ContactForm_button_submit")}</button>) :
                (<>
                    {dispatchingStatus === 201 ?
                    (<p className={scss.succesfull_request}>{t("ContactForm_succesfull_request")}</p>) 
                    :
                    (<div className={scss.error_message}>
                        <img src={iconfail} alt="icon_fail" className={scss.icon_fail}/>
                        <span>{t("ContactForm_error_message")}</span>
                    </div>)}
                </>)
            }
        </form>
        </>
  );
};

export default ContactForm; 