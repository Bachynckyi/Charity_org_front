import { logIn } from '../../redux/user/user-operations';
import { useDispatch, useSelector } from 'react-redux';
import { accessToken, isLoading } from '../../redux/user/user-selectors';
import { Navigate } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import scss from "./LoginPage.module.scss";
import { useState } from 'react';
import LoginForm from 'components/LoginForm/LoginForm';

const LoginPage = () => {
  const dispatch = useDispatch();
  const userStatus = useSelector(accessToken);
  const loading = useSelector(isLoading);
  const [error, setError] = useState(false);

  const LogIn = data => {
    const { email, password } = data;
    const dataSend = { email, password };
    const sendData = async (dataSend) => {
      try {
        dispatch(logIn(dataSend))
        .then(response => {
          if(response.payload === 400) {
            setError(true)
          };
        })
      } 
      catch (error) {
        console.log(error);
      }
    };
    sendData(dataSend);
    if(userStatus === true) {
      return <Navigate to="/adminpanel"/>;
    };
  };

  return (
    <div className={scss.container}>
        {userStatus === null ? 
          (loading === true ? 
            (<div className={scss.loader_container}><Loader/></div>) 
            : 
            (<LoginForm onSubmit={LogIn} error={error}/>)) 
          : 
          (<Navigate to="/admin/panel"/> )}
    </div>
  );
};

export default LoginPage;