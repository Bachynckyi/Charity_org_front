import React from 'react';
import scss from './News.module.scss';

const News = () => {

  return (
    <div className={scss.container}>
        <h4>Новини</h4>
        <ul className={scss.news_list}>
            <li>"Lorem ipsum dolor sit amet</li>
            <li>"Lorem ipsum dolor sit amet</li>
            <li>"Lorem ipsum dolor sit amet</li>
            <li>"Lorem ipsum dolor sit amet</li>
            <li>"Lorem ipsum dolor sit amet</li>
            <li>"Lorem ipsum dolor sit amet</li>
            <li>"Lorem ipsum dolor sit amet</li>
            <li>"Lorem ipsum dolor sit amet</li>
            <li>"Lorem ipsum dolor sit amet</li>
            <li>"Lorem ipsum dolor sit amet</li>
        </ul>
        <ul className={scss.news_list}>
            <li>"Lorem ipsum dolor sit amet</li>
            <li>"Lorem ipsum dolor sit amet</li>
            <li>"Lorem ipsum dolor sit amet</li>
            <li>"Lorem ipsum dolor sit amet</li>
            <li>"Lorem ipsum dolor sit amet</li>
            <li>"Lorem ipsum dolor sit amet</li>
            <li>"Lorem ipsum dolor sit amet</li>
            <li>"Lorem ipsum dolor sit amet</li>
            <li>"Lorem ipsum dolor sit amet</li>
            <li>"Lorem ipsum dolor sit amet</li>
        </ul>
    </div>
  );
};

export default News;