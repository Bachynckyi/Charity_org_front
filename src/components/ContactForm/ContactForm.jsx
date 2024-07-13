import React, { useState, useCallback, useEffect } from 'react';
import scss from "./ContactForm.module.scss";
import { useDispatch, useSelector} from 'react-redux';
import { isLoadingFeedback } from '../../redux/feedback/feedback-selectors';
import {newRequestFeedback} from '../../redux/feedback/feedback-operations';
import iconfail from '../../images/icon_fail_blue.svg';
import GlobalLoader from '../GlobalLoader/GlobalLoader';
import { LoaderContainer, loader } from "react-global-loader";

const ContactForm = () => {
    const dispatch = useDispatch();
    const loading = useSelector(isLoadingFeedback);
    const [dispatchingStatus, setDispatchingStatus] = useState(null);

    useEffect(() => {
        if(loading){
          loader.show();
          document.body.style.overflowY = 'hidden'
        }
        else {
        setTimeout(() => {
            document.body.style.overflowY = 'scroll';
            loader.hide();
        }, 500);
        }
    }, [loading]);

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
        dispatch(newRequestFeedback(request))
        .then(response => {
            setDispatchingStatus(response.payload.request.status);
            setRequest({
                name: "",
                phone: "",
                email: "",
                comments: "",
                date: "",
            })
            }
        )
    };

    return (
        <>
        <LoaderContainer>
            <GlobalLoader/>
        </LoaderContainer>
        <form className={scss.form} onSubmit={submitForm}>
            <span className={scss.form_title}>Зв’яжіться з нами</span>
            <input 
                className={scss.input}
                required
                id='name'
                placeholder="Ваше ім'я *"
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
                placeholder="Телефон *"
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
                placeholder="Електронна пошта *"
                name='email'
                value={request.email}
                onChange={handleChange}
                type='email'
                autoComplete='off'
            />
            <textarea
                id='comments'
                type='text'
                placeholder='Текст повідомлення...'
                className={scss.textarea}
                name='comments'
                value={request.comments}
                onChange={handleChange}
                autoComplete='off'
            ></textarea>
            {dispatchingStatus === null ? 
                (<button type='submit' className={scss.button_submit}>Відправити</button>) :
                (<>
                    {dispatchingStatus === 201 ?
                    (<p className={scss.succesfull_request}>Дякуємо ! Вашу заявку успішно відправлено</p>) 
                    :
                    (<div className={scss.error_message}>
                        <img src={iconfail} alt="icon_fail" className={scss.icon_fail}/>
                        <span>Помилка ! Спробуйте ще раз</span>
                    </div>)}
                </>)
            }
        </form>
        </>
  );
};

export default ContactForm; 