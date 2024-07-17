import React, { useState, useCallback, useEffect }from 'react';
import scss from "./MonoPage.module.scss";
import { getMonoLink, editMonoLink } from '../../../redux/data/data-operations';
import { useDispatch, useSelector } from 'react-redux';
import { accessToken } from '../../../redux/user/user-selectors';
import { checkUser } from '../../../redux/user/user-operations';
import { Link } from 'react-router-dom';
import NotForMobileDevices from 'components/NotForMobileDevices/NotForMobileDevises';
import { motion } from 'framer-motion';
import { loader } from "react-global-loader";

const initialState = {
  monoLink: "",
  id: "",
};

const MonoPage = () => {
  const [request, setRequest] = useState(initialState);
  const dispatch = useDispatch();
  const token = useSelector(accessToken);

  useEffect(() => {
    dispatch(getMonoLink())
        .then(response => setRequest(response.payload[0]));
  }, [dispatch]);

  const handleChange = useCallback(({target}) => {
    const {name, value} = target;
    setRequest(prevState => {
        return {...prevState, [name]: value}
    })
  }, [setRequest]);

  const handleSubmit = () => {
    loader.show();
    document.body.style.overflowY = 'hidden';
    dispatch(editMonoLink({token, request}))
      .then(response => {
        if(response.payload === 401){
            dispatch(checkUser())
              .then(response => {
                if(response.payload !== 401){
                  const token = response.payload.accessToken;
                  dispatch(editMonoLink({token, request}));
                }
              })   
        }
        setTimeout(() => {
          document.body.style.overflowY = 'scroll';
          loader.hide();
        }, 1000);
      }) 
  };

  return (
    <>
      <motion.div
        transition={{ duration: 0.4}}
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}>
      <div className={scss.container}>
          <div className={scss.title_container}>
            <span className={scss.title}>Редагування монобанки</span>
          </div>
          <div className={scss.content_container}>
            <div className={scss.form}>
                <input
                    className={scss.input}
                    required
                    id='monoLink'
                    name='monoLink'
                    placeholder="Введіть посилання"
                    value={request.monoLink}
                    onChange={handleChange}
                    type='text'
                />
              <button type='button' className={scss.button} onClick={handleSubmit}>Оновити</button>
              <Link type='button' className={scss.button_menu} to="/admin/panel">Повернутись до меню</Link>
            </div>
            <div className={scss.info}>
                <p className={scss.text}>1. У полі вводу відображено поточне посилання на монобанку.</p>
                <p className={scss.text}>2. Для оновлення посилання введіть нове посилання та натисність кнопку "Оновити".</p>
                <p className={scss.text}>3. Після оновлення, поле буде мати нове посилання, яке було введено.</p>
                <p className={scss.text}>4. Якщо потрыбно щоб посилання на монобанку було відсутнє, потрібно видалити посилання з поля вводу та натиснути кнопку "Оновити". В такому випадку кнопка "МОНОБАНКА" буде відсутня на сайті.</p>
            </div>
          </div>
      </div>
      <NotForMobileDevices/>
      </motion.div>
    </>
  );
};

export default MonoPage; 