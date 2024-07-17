import { Outlet } from 'react-router-dom';
import { accessToken } from '../../redux/user/user-selectors';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { checkUser } from '../../redux/user/user-operations';
import scss from './PrivateRoute.module.scss';
import LoginPage from 'pages/LoginPage/LoginPage';
import GlobalLoader from '../GlobalLoader/GlobalLoader';
import { LoaderContainer, loader } from "react-global-loader";

const PrivateRoute = () => {
  const token = useSelector(accessToken);
  const dispatch = useDispatch();

  useEffect(() => {
      if(token !== null){
        loader.show();
        document.body.style.overflowY = 'hidden';
        dispatch(checkUser())
          .then(() => {
            setTimeout(() => {
              document.body.style.overflowY = 'scroll';
              loader.hide();
            }, 1000);
          })
      };
  }, [dispatch, token]);

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