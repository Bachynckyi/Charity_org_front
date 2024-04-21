import React from 'react';
import scss from "./Uploader.module.scss";
import Notiflix from 'notiflix';

const Uploader = ({files, setFiles}) => {

    const uploadHandler = (event) => {
        const file = event.target.files[0];
        if(file !== undefined) {
            if(file.size <= 5000000){
                if(files.filter(item => item.name === file.name).length === 0){
                    setFiles([...files, file]);
                    document.getElementById("file").value = "";
                }
                else {
                    Notiflix.Notify.failure("Файл з таким ім'ям вже доданий", {timeout: 5000, position: "center-top", showOnlyTheLastOne: true});
                }
            }
            else {
                Notiflix.Notify.failure("Розмір файлу перевищує 5 МБ", {timeout: 5000, position: "center-top", showOnlyTheLastOne: true});
            }
        };
    };

    return (
        <div className={scss.form_files}>
            <label htmlFor="file" className={scss.button_input_file}>Завантажити файли</label>
            <input
                className={scss.input_file}
                type='file'
                name="file"
                id='file'
                accept="image/png, image/jpeg, image/jpg, .doc, .pdf, .docx, .xlsx, .xls"
                onChange={uploadHandler}
                disabled={Object.keys(files).length === 10}
            />
            <div className={scss.text_container}>
                <p className={scss.text}>Допустимі формати файлів: PNG, JPEG, JPG, DOC, PDF, DOCX, XLSX, XLS</p>
                <p className={scss.text}>Максимальний розмір файлу: 5 МБ</p>
                <p className={scss.text}>Максимальна кількість файлів до завантаження: 10 шт</p>
            </div>
        </div>
    );
};

export default Uploader ; 