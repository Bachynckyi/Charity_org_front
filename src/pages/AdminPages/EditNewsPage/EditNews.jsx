import React, { useState, useCallback, useEffect } from 'react';
import NotForMobileDevices from 'components/NotForMobileDevices/NotForMobileDevises';
import scss from './EditNews.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { accessToken } from '../../../redux/user/user-selectors';
import { checkUser } from '../../../redux/user/user-operations';
import { useParams } from 'react-router-dom';
import { getNewsById } from '../../../redux/data/data-operations';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';
import { deleteNewsById, editNewsByIdWithImage, editNewsByIdWithoutImage } from '../../../redux/data/data-operations';
import { useNavigate } from "react-router-dom";
import { loader } from "react-global-loader";
import { Link } from 'react-router-dom';

const EditNews = () => {
  const dispatch = useDispatch();
  const token = useSelector(accessToken);
  const [data, setData] = useState([]);
  const newsId = useParams();
  const [error, setError] = useState(false);
  const navigate = useNavigate();

useEffect(() => {
dispatch(getNewsById(newsId.id))
    .then(response => { 
    if(response.payload === 404 || response.payload === 500) {
    setError(true);
    }
    else {
        setData(response.payload)
    }
    });
// eslint-disable-next-line
}, []);

const handleChange = useCallback(({target}) => {
    const {name, value} = target;
    if(name === "newImage"){
        if(target.files[0] === undefined){
            setData(prevState => {
            return {...prevState} 
        });
        }
        else {
            setData(prevState => {
                return {...prevState, image: target.files[0]} 
            })
        }
    }
    else {
        setData(prevState => {
            return {...prevState, [name]: value}
        })
    }   
}, [setData]);

const updateNews = (event) => {
    event.preventDefault();
    loader.show();
    document.body.style.overflowY = 'hidden';
    if(typeof(data.image) !== "string" ) {
        const id = newsId.id;
        const formData = new FormData();
        formData.append("image", data.image);
        formData.append("title_UKR", data.title_UKR);
        formData.append("title_ENG", data.title_ENG);
        formData.append("text_UKR", data.text_UKR);
        formData.append("text_ENG", data.text_UKR);
        formData.append("date", data.date);
        const request = formData;
        dispatch(editNewsByIdWithImage({token, id, request}))
            .then(response => {
                if(response.payload === 401){
                    dispatch(checkUser())
                        .then(response => {
                        if(response.payload !== 401){
                            const token = response.payload.accessToken;
                            dispatch(editNewsByIdWithImage({token, id, request}))
                                .then(response => {
                                    setData(response.payload);
                                });
                            document.getElementById("file").value = "";
                        }})   
                }
                setData(response.payload);
                document.getElementById("file").value = "";
                setTimeout(() => {
                    document.body.style.overflowY = 'scroll';
                    loader.hide();
                  }, 1000);
                }) 
    }
    else {
        const id = newsId.id;
        const request = data;
        dispatch(editNewsByIdWithoutImage({token, id, request}))
            .then(response => {
            if(response.payload === 401){
                dispatch(checkUser())
                    .then(response => {
                    if(response.payload !== 401){
                        const token = response.payload.accessToken;
                        dispatch(editNewsByIdWithoutImage({token, id, request}))
                            .then(response => {
                                setData(response.payload)
                            })
                    }
                    })   
          }
          setData(response.payload);
          setTimeout(() => {
            document.body.style.overflowY = 'scroll';
            loader.hide();
          }, 1000);
        })
    }
};

const deleteNews = () => {
    loader.show();
    document.body.style.overflowY = 'hidden';
    const id = newsId.id;
    dispatch(deleteNewsById({token, id}))
    .then(response => {
      if(response.payload === 401){
          dispatch(checkUser())
            .then(response => {
              if(response.payload !== 401){
                const token = response.payload.accessToken;
                dispatch(deleteNewsById({token, id}));
                navigate("admin/news/edit");
              }
            })   
      }
      navigate("/admin/news/edit");
    }) 
};

return (
<>
    {error === true ? (
        <NotFoundPage/>
    ) : (
    <>  
        {Object.keys(data).length !== 0 && (
            <> 
            <div className={scss.container}>
                <div className={scss.title_container}>
                    <span className={scss.title}>Редагувати новину</span>
                </div>
                <form className={scss.form}>
                    <div className={scss.input_image_wrapper}>
                        <p className={scss.info_text}>Зображення</p>

                        {typeof(data.image) === "string" ? 
                            (<img 
                                src={data.image} 
                                alt="defaultImage"
                                className={scss.image}
                            />) : 
                            (<img 
                                src={URL.createObjectURL(data.image)} 
                                alt="defaultImage"
                                className={scss.image}
                            />)
                        }
                        <input
                            className={scss.input_photo}
                            type='file'
                            name="newImage"
                            id='file'
                            required
                            accept="image/png, image/jpeg"
                            onChange={handleChange}
                        />
                        <div className={scss.button_container}>
                        <label htmlFor="file" className={scss.button_input_file}>Обрати файл</label>
                        <Link type='button' className={scss.button_menu} to="/admin/news/edit">Назад</Link>
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
                    <div className={scss.wrapper_buttons}>
                        <button type='button' className={scss.submit_button} onClick={updateNews}>Оновити новину</button>
                        <button type='button' className={scss.delete_button} onClick={deleteNews}>Видалити новину</button>
                    </div>
                </form>
            </div>
            <NotForMobileDevices/>
            </>
        )}
    </>
    )}

</>
);
};

export default EditNews; 

