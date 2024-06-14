import NotForMobileDevices from 'components/NotForMobileDevices/NotForMobileDevises';
import scss from './LoginForm.module.scss';
import { useState, useCallback } from 'react';

const initialState = {
  email: "",
  password: "",
};

export const LoginForm = ({onSubmit, error}) => {
  const [state, setState] = useState({...initialState});
  const { email, password } = state;

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit({...state});
    setState(initialState);
  };

  const handleChange = useCallback(({ target }) => {
      const { name, value } = target;
      setState(prevState => {
        return { ...prevState, [name]: value };
      });
    },
    [setState]
  );

  return (
    <>
      <NotForMobileDevices/>
      <form className={scss.form} onSubmit={handleSubmit}>
        <h2 className={scss.title}>Авторизація</h2>
        <div className={scss.wrapper}>
          <input
            className={scss.input}
            name='email'
            value={email}
            required
            placeholder='Введіть адресу електронної пошти'
            onChange={handleChange}
          />
          <input
            className={scss.input}
            name='password'
            value={password}
            required
            placeholder='Введіть пароль'
            onChange={handleChange}
            minLength="6"
            type='password'
            autoComplete='on'
          />
        </div>
        <p className={error ? (scss.error_message_active) : (scss.error_message)}>Не правильна адреса електронної пошти або пароль</p>
        <button className={scss.button} type="submit">
          <p className={scss.text}>Вхід</p>
        </button>
      </form>
    </>
  );
};

export default LoginForm;