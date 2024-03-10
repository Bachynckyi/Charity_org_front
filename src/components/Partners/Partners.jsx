import React from 'react';
import scss from './Partners.module.scss';

const Partners = () => {

  return (
    <div className={scss.container}>
        <div className={scss.partners}>
          <span className={scss.title}>Наші партнери</span>
        </div>
        <div className={scss.become_partner}>
            <span className={scss.become_title}>Стати партнером</span>
            <span className={scss.text}>Допомагай ЗСУ. Зроби внесок у перемогу, ти зможеш внести частку у перемогу. Пора приймати рішення !</span>
            <form className={scss.form}>
              <input 
                className={scss.input}
                required
                id='name'
                placeholder="Ваше ім'я *"
              />
              <input 
                className={scss.input}
                required
                id='phone'
                placeholder="Телефон *"
              />
              <input 
                className={scss.input}
                required
                id='email'
                placeholder="Електронна пошта *"
              />
              <button type='submit' className={scss.button_submit}>Відправити форму</button>
            </form>
            <span className={scss.info}>Якщо ви хочете зв’язатись з нами іншим способом, напишіть нам на hello@unity.horizon.ua</span>
        </div>
    </div>
  );
};

export default Partners;

