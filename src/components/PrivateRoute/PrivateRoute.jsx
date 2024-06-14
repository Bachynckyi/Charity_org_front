import { Outlet } from 'react-router-dom';
import { accessToken, isLoading } from '../../redux/user/user-selectors';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { checkUser } from '../../redux/user/user-operations';
import Loader from 'components/Loader/Loader';
import scss from './PrivateRoute.module.scss';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';

const PrivateRoute = () => {
  const token = useSelector(accessToken);
  const loading = useSelector(isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
      if(token !== null){
        dispatch(checkUser())
      };
  // eslint-disable-next-line
  }, []);

  return (
  <div className={scss.container}>
    {loading === true ? (<div className={scss.loader_container}><Loader/></div>) : 
      (<>{token === null ? (<NotFoundPage/>) : (<Outlet/>)}</>)}
  </div>
  );
};

export default PrivateRoute;