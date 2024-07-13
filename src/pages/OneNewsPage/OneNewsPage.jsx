import React, { useEffect, useState } from 'react';
import scss from "./OneNewsPage.module.scss";
import { useDispatch } from 'react-redux';
import { getNewsById } from '../../redux/data/data-operations';
import { useParams } from 'react-router-dom';
import { LoaderContainer, loader } from "react-global-loader";
import { isLoadingData } from '../../redux/data/data-selectors';
import { useSelector } from 'react-redux';
import GlobalLoader from '../../components/GlobalLoader/GlobalLoader';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';


const OneNewsPage = () => {
  const dispatch = useDispatch();
  const [request, setRequest] = useState([]);
  const newsId = useParams();
  const loading = useSelector(isLoadingData);
  const [error, setError] = useState(false);

  useEffect(() => {
    dispatch(getNewsById(newsId.id))
      .then(response => { 
        if(response.payload === 404 || response.payload === 500) {
        setError(true);
        }
        else {
          setRequest(response.payload)
        }
        });
// eslint-disable-next-line
  }, []);

  useEffect(() => {
    loader.show();
    document.body.style.overflowY = 'hidden';
    if(loading === false) {
      setTimeout(() => {
        document.body.style.overflowY = 'scroll';
        loader.hide();
      }, 600);
    }
  }, [loading]);


  return (
    <>
    {error === true ? (
      <NotFoundPage/>
      ) : (
        <>
          {loading === true && (
            <LoaderContainer>
              <GlobalLoader/>
            </LoaderContainer>
          )}
          {Object.keys(request).length !== 0 && ( 
              <div className ={scss.container}>
                  <h1 className={scss.title}>{request.title_UKR}</h1>
                  <span className={scss.date}>{request.date.split(",")[0]}</span>
                  <div className={scss.wrapper}>
                      <img src={request.image} alt="news" className={scss.photo}/>
                      <span className={scss.text}>{request.text_UKR}</span>
                  </div>
              </div>
          )}
        </>
      )}
    </>
  );
};

export default OneNewsPage; 