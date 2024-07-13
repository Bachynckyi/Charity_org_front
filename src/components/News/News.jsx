import React, { useEffect, useState } from 'react';
import scss from './News.module.scss';
import { NavLink } from 'react-router-dom';
import arrow_link from '../../images/arrow_link.svg';
import { getLastNews } from '../../redux/data/data-operations';
import { useDispatch } from 'react-redux';


const News = () => {
  const dispatch = useDispatch();
  const [request, setRequest] = useState([]);

  useEffect(() => {
    dispatch(getLastNews())
      .then(response => setRequest(response.payload));
  }, [dispatch]);

  const newsItem = request.map((item) => (
    <NavLink className={scss.news_item} key={item._id} to={`/news/${item._id}`}>
      <img src={item.image} alt="news" className={scss.photo}/>
        <div className={scss.description_container}>
            <span className={scss.description}>{item.title_UKR}</span>
            <div className={scss.date_container}>
                <span className={scss.date}>{item.date.split(",")[0]}</span>
                <img src={arrow_link} alt='arrow_link' className={scss.arrow_link} />
            </div>
        </div>
    </NavLink>
  ));

  return (
    <>
      {Object.keys(request).length !== 0 && (
        <div className={scss.container}>
          <span className={scss.title}>Новини</span>
          <ul className={scss.news_list}>
              {newsItem}
          </ul>
        </div>
      )}
    </>
  );
};

export default News;