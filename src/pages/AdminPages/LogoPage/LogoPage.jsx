import React, { useEffect, useState } from 'react';
import scss from "./LogoPage.module.scss";
import NotForMobileDevices from 'components/NotForMobileDevices/NotForMobileDevises';
import { useDispatch, useSelector } from 'react-redux';
import { accessToken } from '../../../redux/user/user-selectors';
import { checkUser } from '../../../redux/user/user-operations';
import { getAllPhotoSlider, addPhotoSlider, deletePhotoSlider } from '../../../redux/data/data-operations';
import { Link } from 'react-router-dom';
import defaultImage from '../../../images/default_image.png';
import { RxCross1 } from "react-icons/rx";
import LogoList from './LogoList/LogoList';

const LogoPage = () => {
  const dispatch = useDispatch();
  const token = useSelector(accessToken);
  const [request, setRequest] = useState([]);
  const [photoSlider, setPhotoSlider] = useState("");

  useEffect(() => {
    dispatch(getAllPhotoSlider())
      .then(response => {
        setRequest(response.payload)});
  }, [dispatch]);

  const addNewPhotoSLider = ({target}) => {
    if(target.files[0] !== undefined){
      setPhotoSlider(target.files[0]);
    }
  };

  const deleteNewPhotoSlider = () => {
    setPhotoSlider("");
    document.getElementById("file").value = "";
  };

  const submitNewPhotoSlider = () => {
    const formData = new FormData();
    formData.append("photoSlider", photoSlider);
    const request = formData;
    dispatch(addPhotoSlider({token, request}))
    .then(response => {
      if(response.payload === 401){
          dispatch(checkUser())
            .then(response => {
              if(response.payload !== 401){
                const token = response.payload.accessToken;
                dispatch(addNewPhotoSLider({token, request}));
                setPhotoSlider("");
                document.getElementById("file").value = "";
                dispatch(getAllPhotoSlider())
                  .then(response => {
                    setRequest(response.payload)});
              }
            })   
      }
      setPhotoSlider("");
      document.getElementById("file").value = "";
      dispatch(getAllPhotoSlider())
      .then(response => {
        setRequest(response.payload)});
    }) 
  };

  const submitDeletePhotoSlider = (id) => {
    dispatch(deletePhotoSlider({token, id}))
    .then(response => {
      if(response.payload === 401){
          dispatch(checkUser())
            .then(response => {
              if(response.payload !== 401){
                const token = response.payload.accessToken;
                dispatch(deletePhotoSlider({token, id}));
                dispatch(getAllPhotoSlider())
                .then(response => {
                  setRequest(response.payload)});
              }
            })   
      }
      dispatch(getAllPhotoSlider())
      .then(response => {
        setRequest(response.payload)});
    }) 
  };

  return (
    <>
      <div className={scss.container}>
        <div className={scss.title_container}>
            <span className={scss.title}>Редагування логотипів партнерів</span>
        </div>
        <div className={scss.content_container}>
            <div className={scss.main_wrapper}>
              <div className={scss.form}>
                  <p className={scss.info_text}>Додайте новий логотип</p>
                  {photoSlider !== "" ? 
                      (<img 
                          src={URL.createObjectURL(photoSlider)} 
                          alt="newPhotoSlider" 
                          className={scss.newPhotoSlider}
                      />)
                      :
                      (<img 
                          src={defaultImage} 
                          alt="defaultImage"
                          className={scss.defaultImage}
                      />)
                  }                      
                  <input
                      className={scss.input_photo}
                      type='file'
                      name="newPhotoSlider"
                      id='file'
                      required
                      accept="image/png, image/jpeg"
                      onChange={addNewPhotoSLider}
                  />
                  <div className={scss.button_container}>
                    <label htmlFor="file" className={scss.button_input_file}>Обрати файл</label>
                    <button type='button' className={scss.button} onClick={submitNewPhotoSlider}>Оновити</button>
                    <button type='button' className={scss.button_delete} onClick={deleteNewPhotoSlider}>     
                      <RxCross1 className={scss.delete_icon}/>
                    </button>

                  </div>
              </div>
              <div className={scss.right_wrapper}>
                <Link type='button' className={scss.button_menu} to="/admin/panel">Повернутись до меню</Link>
                <p className={scss.text}>Додайте новий логотип та натисність кнопку "Оновити"</p>
                <p className={scss.text}>Всі поточні логотипи відображені у переліку нижче</p>
                <p className={scss.text}>Для видалення логотипу натисніть червону кнопку поруч з логотипом</p>
                <p className={scss.text}>Для відображення слайдеру логотипів потрібно додати мінімум три логотипа</p>
              </div>
            </div>
            <div className={scss.list_container}>
              <p className={scss.list_text}>Поточний перелік логотипів</p>
                {Object.keys(request).length !== 0 ? (
                  <LogoList submitDeletePhotoSlider={submitDeletePhotoSlider} request={request}/>
                ) : (
                  <p className={scss.info_text}>Нажаль перелік пустий</p>
                )}
            </div>
        </div>
      </div>
      <NotForMobileDevices/>
    </>

  );
};

export default LogoPage; 