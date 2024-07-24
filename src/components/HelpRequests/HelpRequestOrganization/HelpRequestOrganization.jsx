import React, { useState, useCallback }from 'react';
import scss from "./HelpRequestOrganization.module.scss";
import Uploader from 'components/Uploader/Uploader';
import FileList from 'components/Uploader/FileList/FileList';
import {requestOrg} from '../../../redux/request/request-operations';
import { useDispatch} from 'react-redux';
import iconfail from '../../../images/icon_fail_blue.svg';
import { Link } from "react-router-dom";
import GlobalLoader from '../../GlobalLoader/GlobalLoader';
import { LoaderContainer, loader } from "react-global-loader";
import { useTranslation } from 'react-i18next';

const initialState = {
    organization: "",
    name: "",
    email: "",
    phone: "",
    location: "",
    reason: "",
    help: "",
    agreement: false,
};

const HelpRequestOrganization = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [data, setData] = useState({...initialState});
    const [files, setFiles] = useState([]);
    const {organization, name, phone, email, location, reason, help, agreement } = data;
    const [dispatchingStatus, setDispatchingStatus] = useState(null);

    const removeFile = (filename) => {
        setFiles(files.filter(file => file.name !== filename));
    };

    const onChangeForm = useCallback(({ target }) => {
        if(dispatchingStatus !== 201) {
            setDispatchingStatus(null);
        };
        const {name, value} = target;
        if(agreement === "Підтверджено") {
            setData(prevState => {
                return {...prevState, agreement: false};
            })
        }
        else {
            setData(prevState => {
                return {...prevState, [name]: value};
            })
        }
    },[agreement, dispatchingStatus]);

    const onSubmitForm = (event) => {
        event.preventDefault();
        loader.show();
        document.body.style.overflowY = 'hidden';
        const todayDate = new Date();
        const date = todayDate.toLocaleString();
        const formData = new FormData();
        formData.append("organization", organization);
        formData.append("name", name);
        formData.append("email", email);
        formData.append("phone", phone);
        formData.append("location", location);
        formData.append("reason", reason);
        formData.append("help", help);
        formData.append("agreement", agreement);
        formData.append("date", date);
        for(let file of files) {
            formData.append('files', file);
        };
        const data = formData;
        dispatch(requestOrg(data))
            .then(response => {
                setDispatchingStatus(response.payload.request.status);
                setData({...initialState});
                setFiles([]);
                setTimeout(() => {
                    document.body.style.overflowY = 'scroll';
                    loader.hide();
                }, 500);
        })
    };

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
      };

    return (
        <>
            <LoaderContainer>
                <GlobalLoader/>
            </LoaderContainer>
            <form className={scss.form_container} onSubmit={onSubmitForm}>
                <div className={scss.form_organization}>
                    <label className={scss.form_label}>
                        <span className={scss.form_input_name}>{t("HelpOffer_form_input_name")}</span>
                            <input 
                                className={scss.form_input}
                                required
                                id='organization'
                                placeholder={t("HelpOffer_form_input")}
                                name='organization'
                                minLength="3"
                                type='text'
                                autoComplete='off'
                                value={organization}
                                onChange={onChangeForm}
                            />
                    </label>
                    <label className={scss.form_label}>
                        <span className={scss.form_input_name}>{t("HelpOffer_form_input_name1")}</span>
                        <input 
                            className={scss.form_input}
                            required
                            id='name'
                            placeholder={t("HelpOffer_form_input1")}
                            name='name'
                            minLength="3"
                            type='text'
                            autoComplete='off'
                            value={name}
                            onChange={onChangeForm}
                        />
                    </label>
                    <label className={scss.form_label}>
                        <span className={scss.form_input_name}>{t("HelpOffer_form_input_name2")}</span>
                        <input 
                            className={scss.form_input}
                            required
                            id='email'
                            placeholder={t("HelpOffer_form_input2")}
                            name='email'
                            type='email'
                            autoComplete='off'
                            value={email}
                            onChange={onChangeForm}
                        />
                    </label>
                    <label className={scss.form_label}>
                        <span className={scss.form_input_name}>{t("HelpOffer_form_input_name3")}</span>
                        <input 
                            className={scss.form_input}
                            required
                            id='phone'
                            placeholder={t("HelpOffer_form_input3")}
                            name='phone'
                            minLength="7"
                            type='tel'
                            autoComplete='off'
                            value={phone}
                            onChange={onChangeForm}
                        />
                    </label>
                    <label className={scss.form_label}>
                        <span className={scss.form_input_name}>{t("HelpOffer_form_input_name4")}</span>
                        <input 
                            className={scss.form_input}
                            required
                            id='location'
                            placeholder={t("HelpOffer_form_input4")}
                            name='location'
                            minLength="2"
                            type='text'
                            autoComplete='off'
                            value={location}
                            onChange={onChangeForm}
                        />
                    </label>
                    <label className={scss.form_label}>
                        <span className={scss.form_input_name}>{t("HelpOffer_form_input_name5")}</span>
                        <input 
                            className={scss.form_input}
                            required
                            id='reason'
                            placeholder={t("HelpOffer_form_input5")}
                            name='reason'
                            minLength="3"
                            type='text'
                            autoComplete='off'
                            value={reason}
                            onChange={onChangeForm}
                        />
                    </label>
                    <label className={scss.form_label}>
                        <span className={scss.form_input_name}>{t("HelpOffer_form_input_name6")}</span>
                        <input 
                            className={scss.form_input}
                            required
                            id='help'
                            placeholder={t("HelpOffer_form_input6")}
                            name='help'
                            minLength="3"
                            type='text'
                            autoComplete='off'
                            value={help}
                            onChange={onChangeForm}
                        />
                    </label>
                </div>
                <div className={scss.uploader_wrapper}>
                    <Uploader files={files} setFiles={setFiles} removeFile={removeFile}/>
                    <FileList files={files} removeFile={removeFile}/>
                </div>
                <div className={scss.form_checkbox}>
                    <label>
                        <input
                            className={scss.form_input_checkbox}
                            type='checkbox'
                            value="Підтверджено"
                            name="agreement"
                            id='agreement'
                            required
                            onChange={onChangeForm}
                            checked={agreement}
                        />
                        <span className={scss.form_input_checkbox_custom}></span>
                    </label>
                    <Link className={scss.form_checkbox_text} to="/privacy" onClick={scrollToTop}>{t("HelpOffer_form_checkbox_text")}</Link>
                </div>
                    {dispatchingStatus === null ? 
                        (<button type='submit' className={scss.button_submit}>{t("HelpOffer_button_submit")}</button>)
                    :
                    (<>
                        {dispatchingStatus === 201 ? 
                            (<div className={scss.request_container}>
                                <span className={scss.request_text}>{t("HelpOffer_request_text")}</span>
                            </div>) 
                        : (
                            <div className={scss.request_container_fail}>
                            <img src={iconfail} alt="icon-fail" className={scss.icon_fail}/>
                            <span className={scss.request_text}>{t("HelpOffer_request_text1")}</span></div>)}
                    </>)}
            </form>
        </>
    );
};

export default HelpRequestOrganization; 