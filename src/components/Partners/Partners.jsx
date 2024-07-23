import React, { useState, useCallback } from 'react';
import scss from './Partners.module.scss';
import { useDispatch } from 'react-redux';
import {newRequestPartner} from '../../redux/partners/partners-operations';
import iconfail from '../../images/icon_fail_yellow.svg';
import GlobalLoader from '../GlobalLoader/GlobalLoader';
import { LoaderContainer, loader } from "react-global-loader";
import { useTranslation } from 'react-i18next';

const Partners = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [dispatchingStatus, setDispatchingStatus] = useState(null);
  const [request, setRequest] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
  });

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
    loader.show();
    document.body.style.overflowY = 'hidden';
    dispatch(newRequestPartner(request))
      .then(response => {
        setDispatchingStatus(response.payload.request.status);
        setTimeout(() => {
          document.body.style.overflowY = 'scroll';
          loader.hide();
        }, 500);
      });
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
          <span className={scss.become_title}>{t("Partners_become_title")}</span>
          <span className={scss.text}>{t("Partners_text")}</span>
            {dispatchingStatus === null ? (
              <form className={scss.form} onSubmit={submitForm}>
                <input 
                  className={scss.input}
                  required
                  id='name'
                  name='name'
                  minLength="3"
                  placeholder={t("Partners_input")}
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
                  placeholder={t("Partners_input1")}
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
                  placeholder={t("Partners_input2")}
                  value={request.email}
                  onChange={handleChange}
                  type='email'
                  autoComplete='off'
                />
                <button type='submit' className={scss.button_submit}>{t("Partners_button_submit")}</button>
              </form>
            ) : 
            (<>
              {dispatchingStatus === 201 ? (
                <div className={scss.request_container}>
                    <span className={scss.request_text}>{t("Partners_request_text")}</span>
                </div>
              ) : (
                <div className={scss.request_container_fail} onClick={refresh}>
                    <img src={iconfail} alt="icon-fail" className={scss.icon_fail}/>
                    <span className={scss.request_text}>{t("Partners_request_text1")}</span>
                </div>
              )}
              </>)}
          <span className={scss.info}>{t("Partners_info")} 
            <a className={scss.contacts_link} href="mailto:unityhorizon@gmail.com"> unityhorizon@gmail.com</a>
          </span>
      </div>
    </div>
    </div>
    </>
  );
};

export default Partners;

