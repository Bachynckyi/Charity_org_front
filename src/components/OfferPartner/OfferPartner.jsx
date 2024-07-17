import React, { useState, useCallback } from 'react';
import scss from "./OfferPartner.module.scss";
import Uploader from 'components/Uploader/Uploader';
import FileList from 'components/Uploader/FileList/FileList';
import {offerPartner} from '../../redux/partners/partners-operations';
import { useDispatch } from 'react-redux';
import iconfail from '../../images/icon_fail_blue.svg';
import { Link } from 'react-router-dom';
import GlobalLoader from '../GlobalLoader/GlobalLoader';
import { LoaderContainer, loader } from "react-global-loader";

const initialState = {
    organization: "",
    name: "",
    email: "",
    phone: "",
    location: "",
    agreement: false,
};

const OfferPartner = () => {
    const dispatch = useDispatch();
    const [data, setData] = useState({...initialState});
    const [files, setFiles] = useState([]);
    const {organization, name, phone, email, location, agreement } = data;
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
        formData.append("agreement", agreement);
        formData.append("date", date);
        for(let file of files) {
            formData.append('files', file);
        };
        const data = formData;
        dispatch(offerPartner(data))
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
                        <span className={scss.form_input_name}>Назва організіції</span>
                            <input 
                                className={scss.form_input}
                                required
                                id='organization'
                                placeholder="Введіть назву організації, яка запрошує допомогу"
                                name='organization'
                                minLength="3"
                                type='text'
                                autoComplete='off'
                                value={data.organization}
                                onChange={onChangeForm}
                            />
                    </label>
                    <label className={scss.form_label}>
                        <span className={scss.form_input_name}>Контактна особа</span>
                        <input 
                            className={scss.form_input}
                            required
                            id='name'
                            placeholder="Введіть ПІБ особи, яка запрошує допомогу/уповноважена запросити допомогу"
                            name='name'
                            minLength="3"
                            type='text'
                            autoComplete='off'
                            value={data.name}
                            onChange={onChangeForm}
                        />
                    </label>
                    <label className={scss.form_label}>
                        <span className={scss.form_input_name}>Електрона пошта</span>
                        <input 
                            className={scss.form_input}
                            required
                            id='email'
                            placeholder="Введіть електрону пошту для подальшого зв'язку"
                            name='email'
                            type='email'
                            autoComplete='off'
                            value={data.email}
                            onChange={onChangeForm}
                        />
                    </label>
                    <label className={scss.form_label}>
                        <span className={scss.form_input_name}>Номер телефону</span>
                        <input 
                            className={scss.form_input}
                            required
                            id='phone'
                            placeholder="Введіть номер телефону для подальшого зв'язку"
                            name='phone'
                            minLength="7"
                            type='tel'
                            autoComplete='off'
                            value={data.phone}
                            onChange={onChangeForm}
                        />
                    </label>
                    <label className={scss.form_label}>
                        <span className={scss.form_input_name}>Населений пункт</span>
                        <input 
                            className={scss.form_input}
                            required
                            id='location'
                            placeholder="Введіть назву міста з якого відбувається запит на допомогу або актуальне місцезнаходження"
                            name='location'
                            minLength="2"
                            type='text'
                            autoComplete='off'
                            value={data.location}
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
                    <Link className={scss.form_checkbox_text} to="/privacy" onClick={scrollToTop}>Я даю згоду на обробку моїх персональних данних</Link>
                </div>
                    {dispatchingStatus === null ? 
                        (<button type='submit' className={scss.button_submit}>Відправити форму</button>)
                    :
                    (<>
                        {dispatchingStatus === 201 ? 
                            (<div className={scss.request_container}>
                                <span className={scss.request_text}>Дякуємо ! Вашу заявку успішно відправлено</span>
                            </div>) 
                        : (
                            <div className={scss.request_container_fail}>
                                <img src={iconfail} alt="icon-fail" className={scss.icon_fail}/>
                                <span className={scss.request_text}>Помилка ! Спробуйте ще раз</span>
                            </div>)}
                    </>)}
            </form>
        </>
    );
};

export default OfferPartner; 