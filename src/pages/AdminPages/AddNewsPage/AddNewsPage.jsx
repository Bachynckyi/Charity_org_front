import React, { useState, useCallback} from 'react';
import NotForMobileDevices from 'components/NotForMobileDevices/NotForMobileDevises';
import scss from './AddNewsPage.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { accessToken } from '../../../redux/user/user-selectors';
import defaultImage from '../../../images/default_image.png';
import { RxCross1 } from "react-icons/rx";
import { addNews } from '../../../redux/data/data-operations';
import { checkUser } from '../../../redux/user/user-operations';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { loader } from "react-global-loader";


const initialState = {
  date: "",
  image: "",
  title_UKR: "",
  title_ENG: "",
  text_UKR: "",
  text_ENG: "",
};

const AddNewsPage = () => {
  const dispatch = useDispatch();
  const token = useSelector(accessToken);
  const [data, setData] = useState({...initialState});
  const [image, setImage] = useState("");

  const handleChange = useCallback(({target}) => {
    const {name, value} = target;
    const todayDate = new Date();
    const date = todayDate.toLocaleString();
    setData(prevState => {
        return {...prevState, [name]: value, date: date}
    })
  }, [setData]);

  const addNewImage = ({target}) => {
    if(target.files[0] !== undefined){
      setImage(target.files[0]);
    }
  };

  const deleteImage = () => {
    setImage("");
    document.getElementById("file").value = "";
  };

  const submitForm = (event) => {
    event.preventDefault();
    loader.show();
    document.body.style.overflowY = 'hidden';
    const formData = new FormData();
    formData.append("image", image);
    formData.append("title_UKR", data.title_UKR);
    formData.append("title_ENG", data.title_ENG);
    formData.append("text_UKR", data.text_UKR);
    formData.append("text_ENG", data.text_UKR);
    formData.append("date", data.date);
    const request = formData;
    dispatch(addNews({token, request}))
    .then(response => {
      if(response.payload === 401){
          dispatch(checkUser())
            .then(response => {
              if(response.payload !== 401){
                const token = response.payload.accessToken;
                dispatch(addNews({token, request}));
                setImage("");
                document.getElementById("file").value = "";
                setData({...initialState});
              }
            })   
      }
      setImage("");
      document.getElementById("file").value = "";
      setData({...initialState});
      setTimeout(() => {
        document.body.style.overflowY = 'scroll';
        loader.hide();
      }, 1000);
    }) 
  };

  return (
    <motion.div
        transition={{ duration: 0.4}}
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}>
      <div className={scss.container}>
        <div className={scss.title_container}>
          <span className={scss.title}>Додати новину</span>
        </div>
        <form className={scss.form} onSubmit={submitForm}>
          <div className={scss.input_image_wrapper}>
              <p className={scss.info_text}>Додайте зображення</p>
              {image !== "" ? 
                  (<img 
                      src={URL.createObjectURL(image)} 
                      alt="newPhotoSlider" 
                      className={scss.image}
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
                  name="image"
                  id='file'
                  required
                  accept="image/png, image/jpeg"
                  onChange={addNewImage}
              />
              <div className={scss.button_container}>
                <label htmlFor="file" className={scss.button_input_file}>Обрати файл</label>
                <button type='button' className={scss.button_delete} onClick={deleteImage}>     
                  <RxCross1 className={scss.delete_icon}/>
                </button>
                <Link type='button' className={scss.button_menu} to="/admin/panel">Повернутись до меню</Link>
            </div>
          </div>
          <div className={scss.input_title_wrapper}>
            <label className={scss.textarea_label}>Український заголовок
              <textarea 
                id='title_UKR'
                type='text'
                placeholder='Введіть заголовок українською мовою'
                className={scss.textarea_title}
                name='title_UKR'
                value={data.title_UKR}
                required
                autoComplete='off'
                onChange={handleChange}
              ></textarea>
              </label>
            <label className={scss.textarea_label}>Англійський заголовок
              <textarea 
                id='title_ENG'
                type='text'
                placeholder='Введіть заголовок англійською мовою'
                className={scss.textarea_title}
                name='title_ENG'
                value={data.title_ENG}
                required
                autoComplete='off'
                onChange={handleChange}
              ></textarea>
            </label>
          </div>
          <div className={scss.input_text_wrapper}>
          <label className={scss.textarea_label}>Український опис</label>
          <textarea 
                id='text_UKR'
                type='text'
                placeholder='Введіть опис українською мовою'
                className={scss.textarea_text}
                name='text_UKR'
                value={data.text_UKR}
                required
                autoComplete='off'
                onChange={handleChange}
              ></textarea>
              <label className={scss.textarea_label}>Англійський опис</label>
              <textarea 
                id='text_ENG'
                type='text'
                placeholder='Введіть опис англійською мовою'
                className={scss.textarea_text}
                name='text_ENG'
                value={data.text_ENG}
                required
                autoComplete='off'
                onChange={handleChange}
              ></textarea>
          </div>
          <button type='submit' className={scss.submit_button}>Додати новину</button>
        </form>
      </div>
      <NotForMobileDevices/>
    </motion.div>
  );
};

export default AddNewsPage; 