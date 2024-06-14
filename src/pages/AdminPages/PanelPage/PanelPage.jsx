import React from 'react';
import scss from "./PanelPage.module.scss";
import { logOut } from '../../../redux/user/user-operations';
import { useDispatch, useSelector } from 'react-redux';
import { user } from '../../../redux/user/user-selectors';
import { Link } from 'react-router-dom';
import { MdOutlineDeleteForever } from "react-icons/md";
import { IoLogOutOutline } from "react-icons/io5";
import NotForMobileDevices from 'components/NotForMobileDevices/NotForMobileDevises';

const PanelPage = () => {
  const dispatch = useDispatch();
  const userData = useSelector(user);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleLogOut = () => {
    dispatch(logOut())
      .then(scrollToTop());
  };

  return (
    <>
      <NotForMobileDevices/>
      <div className={scss.container}>
        <div className={scss.title_container}>
          <span className={scss.title}>Адміністративна панель</span>
        </div>
        <div className={scss.content_container}>
          <div className={scss.topbar_container}>
              <div className={scss.topbar_info_container}>
                <p className={scss.topbar_text}>Користувач: <b>{userData.email}</b></p>
                <p className={scss.topbar_text}>ID: <b>{userData.id}</b></p>
              </div>
              <div className={scss.topbar_buttons_container}>
                <button className={scss.button_logout} onClick={handleLogOut}>
                  <span>Вийти з аккаунту</span>
                  <IoLogOutOutline className={scss.button_icon}/>
                </button>
                <button className={scss.button_delete}>
                  <span>Видалити аккаунт</span>
                  <MdOutlineDeleteForever className={scss.button_icon}/>
                </button>
              </div>
          </div>
          <div className={scss.controlls}>
            <Link className={scss.controll} to="/admin/mono/edit">Посилання на монобанку</Link>
            <Link className={scss.controll} to="/admin/achievements/edit">Робота з досягненнями</Link>
            <Link className={scss.controll} to="/admin/logo/edit">Робота з логотипами</Link>
            <Link className={scss.controll} to="/admin/news/edit">Робота з новинами</Link>
            <Link className={scss.controll} to="/admin/docs/edit">Робота з документами</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default PanelPage; 