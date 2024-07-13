import { Outlet } from 'react-router-dom';
import { accessToken, isLoadingUser } from '../../redux/user/user-selectors';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { checkUser } from '../../redux/user/user-operations';
import scss from './PrivateRoute.module.scss';
import LoginPage from 'pages/LoginPage/LoginPage';
import GlobalLoader from '../GlobalLoader/GlobalLoader';
import { LoaderContainer, loader } from "react-global-loader";

const PrivateRoute = () => {
  const token = useSelector(accessToken);
  const loading = useSelector(isLoadingUser);
  const dispatch = useDispatch();

  useEffect(() => {
      if(token !== null){
        dispatch(checkUser())
      };
  // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if(loading) {
      loader.show();
      document.body.style.overflowY = 'hidden'
    }
    else {
      setTimeout(() => {
        loader.hide();
        document.body.style.overflowY = 'scroll'
      }, 1000);
    }
  }, [loading]);

  return (
  <>
    <LoaderContainer>
      <GlobalLoader/>
    </LoaderContainer>
    <div className={scss.container}>
    {token === null ? (<LoginPage/>) : (<Outlet/>)}
    </div>
  </>

  );
};

export default PrivateRoute;