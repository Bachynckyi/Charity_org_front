import { logIn } from '../../redux/user/user-operations';
import { useDispatch, useSelector } from 'react-redux';
import { accessToken } from '../../redux/user/user-selectors';
import { Navigate } from 'react-router-dom';
import scss from "./LoginPage.module.scss";
import { useState  } from 'react';
import LoginForm from 'components/LoginForm/LoginForm';
import GlobalLoader from '../../components/GlobalLoader/GlobalLoader';
import { LoaderContainer, loader } from "react-global-loader";
import { motion } from 'framer-motion';

const LoginPage = () => {
  const dispatch = useDispatch();
  const userStatus = useSelector(accessToken);
  const [error, setError] = useState(false);

  const LogIn = data => {
    loader.show();
    document.body.style.overflowY = 'hidden';
    const { email, password } = data;
    const dataSend = { email, password };
        dispatch(logIn(dataSend))
          .then(response => {
            if(response.payload === 400) {
              setError(true)
            };
            setTimeout(() => {
              document.body.style.overflowY = 'scroll';
              loader.hide();
            }, 500);
          })
  };

  return (
    <>
      <LoaderContainer>
        <GlobalLoader/>
      </LoaderContainer>
      <motion.div
          transition={{ duration: 0.4}}
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity: 0}}>
          <div className={scss.container}>
              {userStatus === null ? 
                  (<LoginForm onSubmit={LogIn} error={error}/>)
                : 
                (<Navigate to="/admin/panel"/> )}
          </div>
      </motion.div>
    </>
  );
};

export default LoginPage;