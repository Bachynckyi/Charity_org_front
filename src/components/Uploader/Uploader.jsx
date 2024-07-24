import React from 'react';
import scss from "./Uploader.module.scss";
import Notiflix from 'notiflix';
import { useTranslation } from 'react-i18next';

const Uploader = ({files, setFiles}) => {
    const { t } = useTranslation();
    const uploadHandler = (event) => {
        const file = event.target.files[0];
        if(file !== undefined) {
            if(file.size <= 5000000){
                if(files.filter(item => item.name === file.name).length === 0){
                    setFiles([...files, file]);
                    document.getElementById("file").value = "";
                }
                else {
                    Notiflix.Notify.failure(t("Uploader_failure"), {timeout: 5000, position: "center-top", showOnlyTheLastOne: true});
                }
            }
            else {
                Notiflix.Notify.failure(t("Uploader_failure1"), {timeout: 5000, position: "center-top", showOnlyTheLastOne: true});
            }
        };
    };

    return (
        <div className={scss.form_files}>
            <label htmlFor="file" className={scss.button_input_file}>{t("Uploader_button_input_file")}</label>
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
                <p className={scss.text}>{t("Uploader_text")} PNG, JPEG, JPG, DOC, PDF, DOCX, XLSX, XLS</p>
                <p className={scss.text}>{t("Uploader_text1")} 5 МБ</p>
                <p className={scss.text}>{t("Uploader_text2")} 10 шт</p>
            </div>
        </div>
    );
};

export default Uploader ; 