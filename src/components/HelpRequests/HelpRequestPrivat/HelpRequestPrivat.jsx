import React, { useState, useCallback }from 'react';
import scss from "./HelpRequestPrivat.module.scss";
import Uploader from 'components/Uploader/Uploader';
import FileList from 'components/Uploader/FileList/FileList';
import {requestPrivat} from '../../../redux/request/request-operations';
import { useDispatch, useSelector } from 'react-redux';
import iconfail from '../../../images/icon_fail_blue.svg';
import { isLoading } from '../../../redux/request/request-selectors';
import Loader from '../../../components/Loader/Loader';
import { Link } from 'react-router-dom';

const initialState = {
    name: "",
    email: "",
    phone: "",
    location: "",
    reason: "",
    help: "",
    agreement: false,
};

const HelpRequestIndividual = () => {
    const dispatch = useDispatch();
    const [data, setData] = useState({...initialState});
    const [files, setFiles] = useState([]);
    const {name, phone, email, location, reason, help, agreement } = data;
    const [dispatchingStatus, setDispatchingStatus] = useState(null);
    const loading = useSelector(isLoading);

    const removeFile = (filename) => {
        setFiles(files.filter(file => file.name !== filename));
    };

    const onChangeForm = useCallback(({ target }) => {
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
    },[agreement]);

    const onSubmitForm = (event) => {
        event.preventDefault();
        const todayDate = new Date();
        const date = todayDate.toLocaleString();
        const formData = new FormData();
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
        dispatch(requestPrivat(data))
            .then(response => {
                setDispatchingStatus(response.payload.request.status);
                setData({...initialState});
                setFiles([]);
        })
    };

    const refresh = () => {
        setDispatchingStatus(null);
        setData({...initialState});
        setFiles([]);
    };

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
    };

    return (
        <form className={scss.form_container} onSubmit={onSubmitForm}>
            <div className={scss.form_individual}>
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
                        value={name}
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
                        value={email}
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
                        value={phone}
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
                        value={location}
                        onChange={onChangeForm}
                    />
                </label>
                <label className={scss.form_label}>
                    <span className={scss.form_input_name}>Опис проблеми</span>
                    <input 
                        className={scss.form_input}
                        required
                        id='reason'
                        placeholder="Опишіть проблему, з метою подолання якої ви звернулися до фонду"
                        name='reason'
                        minLength="3"
                        type='text'
                        autoComplete='off'
                        value={reason}
                        onChange={onChangeForm}
                    />
                </label>
                <label className={scss.form_label}>
                    <span className={scss.form_input_name}>Необхідна допомога</span>
                    <input 
                        className={scss.form_input}
                        required
                        id='help'
                        placeholder="Опишіть, що вам необхідно для подолання проблеми"
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
                <Link className={scss.form_checkbox_text} to="/privacy" onClick={scrollToTop}>Я даю згоду на обробку моїх персональних данних</Link>
            </div>
            <>
                {loading === true ?
                (<div className={scss.loader_container}><Loader/></div>)
                : (
                <>
                    {dispatchingStatus === null ? 
                        (<button type='submit' className={scss.button_submit}>Відправити форму</button>)
                    :
                    (<>
                        {dispatchingStatus === 201 ? 
                            (<div className={scss.request_container}>
                                <span className={scss.request_text}>Дякуємо ! Вашу заявку успішно відправлено</span>
                            </div>) 
                        : (
                            <div className={scss.request_container_fail} onClick={refresh}>
                            <img src={iconfail} alt="icon-fail" className={scss.icon_fail}/>
                            <span className={scss.request_text}>Помилка ! Спробуйте ще раз</span></div>)}
                    </>)}
                </>)
                }
            </>
        </form>
    );
};

export default HelpRequestIndividual; 