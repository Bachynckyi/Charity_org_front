import React, { useEffect, useState } from 'react';
import scss from "./EditNewsList.module.scss";
import { getNews } from '../../../redux/data/data-operations';
import { useDispatch } from 'react-redux';
import arrow_link from '../../../images/arrow_link.svg';
import { NavLink } from 'react-router-dom';
import { LoaderContainer, loader } from "react-global-loader";
import { isLoadingData } from '../../../redux/data/data-selectors';
import { useSelector } from 'react-redux';
import GlobalLoader from '../../../components/GlobalLoader/GlobalLoader';

const EditNewsPage = () => {
  const dispatch = useDispatch();
  const [request, setRequest] = useState([]);
  const loading = useSelector(isLoadingData);
  const [skip, setSkip] = useState(0);

  useEffect(() => {
    dispatch(getNews(skip))
       .then(response => {
         setRequest(prevState => [...prevState, ...response.payload]);
       })
   }, [dispatch, skip]);

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

  const newsItem = request.map((item) => (
    <NavLink to={`/admin/news/edit/${item._id}`} key={item._id} className={scss.news_item}>
      <img src={item.image} alt="news" className={scss.photo}/>
      <div className={scss.description_container}>
            <span className={scss.description}>{item.title_UKR}</span>
            <div className={scss.date_container}>
                <span className={scss.date}>{item.date.split(",")[0]}</span>
                  <img src={arrow_link} alt='arrow_link' className={scss.arrow_image}/>
            </div>
      </div>
    </NavLink>
  ));

  return (
    <>
      {loading === true && (
        <LoaderContainer>
          <GlobalLoader/>
        </LoaderContainer>
      )}
      <div className ={scss.container}>
        <div className={scss.title_container}>
            <span className={scss.title}>Новини</span>
        </div>
        {Object.keys(request).length !== 0 ? (
            <ul className={scss.news_list}>
                {newsItem}
            </ul>
        ) : (<div className={scss.wrapper}></div>)}
      </div>
      {Number.isInteger(Object.keys(request).length/10) && <button type="button" className={scss.button} onClick={() => setSkip(skip + 10)}>Показати більше</button> }
    </>
  );
};

export default EditNewsPage; 