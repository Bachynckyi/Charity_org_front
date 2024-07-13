import React, { useState, useCallback, useEffect } from 'react';
import scss from './Partners.module.scss';
import { useDispatch, useSelector} from 'react-redux';
import { isLoadingPartners } from '../../redux/partners/partners-selectors';
import {newRequestPartner} from '../../redux/partners/partners-operations';
import iconfail from '../../images/icon_fail_yellow.svg';
import GlobalLoader from '../GlobalLoader/GlobalLoader';
import { LoaderContainer, loader } from "react-global-loader";

const Partners = () => {
  const dispatch = useDispatch();
  const loading = useSelector(isLoadingPartners);
  const [dispatchingStatus, setDispatchingStatus] = useState(null);
  const [request, setRequest] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
  });

  useEffect(() => {
    if(loading){
      loader.show();
      document.body.style.overflowY = 'hidden'
    }
    else {
      loader.hide();
      document.body.style.overflowY = 'scroll'
    }
}, [loading]);

  const handleChange = useCallback(({target}) => {
      const {name, value} = target;
      const todayDate = new Date();
      const date = todayDate.toLocaleString();
      setRequest(prevState => {
        return {...prevState, [name]: value, date: date}
      })
  }, [setRequest]);

  const submitForm = (e) => {
    e.preventDefault();
    dispatch(newRequestPartner(request))
      .then(response => setDispatchingStatus(response.payload.request.status));
  };

  const refresh = () => {
    setDispatchingStatus(null);
    setRequest({
      name: "",
      phone: "",
      email: "",
      date: "",
    })
  };

  return (
    <>
      <LoaderContainer>
        <GlobalLoader/>
      </LoaderContainer>
      <div className={scss.background_container}>
    <div className={scss.container}>
      <div className={scss.become_partner}>
          <span className={scss.become_title}>Стати партнером</span>
          <span className={scss.text}>Допомагай ЗСУ. Зроби внесок у перемогу, ти зможеш внести частку у перемогу. Пора приймати рішення !</span>
            {dispatchingStatus === null ? (
              <form className={scss.form} onSubmit={submitForm}>
                <input 
                  className={scss.input}
                  required
                  id='name'
                  name='name'
                  minLength="3"
                  placeholder="Ваше ім'я *"
                  value={request.name}
                  onChange={handleChange}
                  type='text'
                  autoComplete='off'
                />
                <input 
                  className={scss.input}
                  required
                  id='phone'
                  name='phone'
                  placeholder="Телефон *"
                  value={request.phone}
                  onChange={handleChange}
                  type='tel'
                  minLength="7"
                  autoComplete='off'
                />
                <input 
                  className={scss.input}
                  required
                  id='email'
                  name='email'
                  placeholder="Електронна пошта *"
                  value={request.email}
                  onChange={handleChange}
                  type='email'
                  autoComplete='off'
                />
                <button type='submit' className={scss.button_submit}>Відправити форму</button>
              </form>
            ) : 
            (<>
              {dispatchingStatus === 201 ? (
                <div className={scss.request_container}>
                    <span className={scss.request_text}>Дякуємо ! Вашу заявку успішно відправлено</span>
                </div>
              ) : (
                <div className={scss.request_container_fail} onClick={refresh}>
                    <img src={iconfail} alt="icon-fail" className={scss.icon_fail}/>
                    <span className={scss.request_text}>Помилка ! Спробуйте ще раз</span>
                </div>
              )}
              </>)}
          <span className={scss.info}>Якщо ви хочете зв’язатись з нами іншим способом, напишіть нам на 
            <a className={scss.contacts_link} href="mailto:unityhorizon@gmail.com"> unityhorizon@gmail.com</a>
          </span>
      </div>
    </div>
      </div>
    </>
  );
};

export default Partners;

