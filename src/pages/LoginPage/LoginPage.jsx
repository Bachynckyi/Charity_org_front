import { logIn } from '../../redux/user/user-operations';
import { useDispatch, useSelector } from 'react-redux';
import { accessToken, isLoadingUser } from '../../redux/user/user-selectors';
import { Navigate } from 'react-router-dom';
import scss from "./LoginPage.module.scss";
import { useState, useEffect } from 'react';
import LoginForm from 'components/LoginForm/LoginForm';
import GlobalLoader from '../../components/GlobalLoader/GlobalLoader';
import { LoaderContainer, loader } from "react-global-loader";
import { motion } from 'framer-motion';

const LoginPage = () => {
  const dispatch = useDispatch();
  const userStatus = useSelector(accessToken);
  const loading = useSelector(isLoadingUser);
  const [error, setError] = useState(false);

  useEffect(() => {
    if(loading){
      loader.show();
      document.body.style.overflowY = 'hidden';
    }
    else {
      setTimeout(() => {
        document.body.style.overflowY = 'scroll';
        loader.hide();
    }, 500);
    }
}, [loading]);

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
    <motion.div
        transition={{ duration: 0.4}}
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}>
        <LoaderContainer>
          <GlobalLoader/>
        </LoaderContainer>
        <div className={scss.container}>
            {userStatus === null ? 
                (<LoginForm onSubmit={LogIn} error={error}/>)
              : 
              (<Navigate to="/admin/panel"/> )}
        </div>
      </motion.div>
  );
};

export default LoginPage;