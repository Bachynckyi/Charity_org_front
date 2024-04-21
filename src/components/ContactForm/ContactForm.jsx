import React from 'react';
import scss from "./ContactForm.module.scss";
import { useState, useCallback } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { isLoading } from '../../redux/feedback/feedback-selectors';
import {newRequestFeedback} from '../../redux/feedback/feedback-operations';
import Loader from 'components/Loader/Loader';
import iconfail from '../../images/icon_fail_blue.svg';

const ContactForm = () => {
    const dispatch = useDispatch();
    const loading = useSelector(isLoading);
    const todayDate = new Date();
    const date = todayDate.toLocaleString();
    const [dispatchingStatus, setDispatchingStatus] = useState(null);

    const [request, setRequest] = useState({
        name: "",
        phone: "",
        email: "",
        comments: "",
        date: date,
    });

    const handleChange = useCallback(({target}) => {
    const {name, value} = target;
    setRequest(prevState => {
        return {...prevState, [name]: value}
    })
    }, [setRequest]);

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
                date: date,
              })
            }
        );
    };

    const refresh = () => {
        setDispatchingStatus(null);
        setRequest({
          name: "",
          phone: "",
          email: "",
          date: date,
        })
    };

    return (
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
            {loading === true ? 
            (<div className={scss.loader_container}>
                <Loader/>
            </div>) 
            : 
            (dispatchingStatus === null ? 
                (<button type='submit' className={scss.button_submit}>Відправити</button>) :
                (<>
                    {dispatchingStatus === 201 ?
                    (<p className={scss.succesfull_request}>Дякуємо ! Вашу заявку успішно відправлено</p>) 
                    :
                    (<button type='button' className={scss.button_refresh} onClick={refresh}>
                        <img src={iconfail} alt="icon_fail" className={scss.icon_fail}/>
                        <span>Помилка ! Спробуйте ще раз</span>
                    </button>)}
                </>)
            )}
        </form>
  );
};

export default ContactForm; 