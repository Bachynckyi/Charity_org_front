import React, { useState, useCallback }from 'react';
import scss from "./HelpRequestIndividual.module.scss";

const initialState = {
    name: "",
    email: "",
    phone: "",
    location: "",
    reason: "",
    help: "",
    file: [],
    agreement: "",
    date: "",
};

const HelpRequestIndividual = () => {
    const [data, setData] = useState({...initialState});

    const onChangeForm = useCallback(({ target }) => {
        const {name, value } = target;
            setData(prevState => {
                return {...prevState, [name]: value};
            })
    },[]);

    const onSubmitForm = (event) => {
        event.preventDefault();
        console.log(data)
    };

    return (
        <form className={scss.form_container} onSubmit={onSubmitForm}>
            <div className={scss.form_individual}>
                <label className={scss.form_label}>
                    <span className={scss.form_input_name}>Контактна особа</span>
                    <input 
                        className={scss.form_input}
                        required
                        id='name'
                        placeholder="Введіть ПІБ особи, яка запрошує допомогу/уповноважена запросити допомогу"
                        name='name'
                        minLength="3"
                        type='text'
                        autoComplete='off'
                        value={data.name}
                        onChange={onChangeForm}
                    />
                </label>
                <label className={scss.form_label}>
                    <span className={scss.form_input_name}>Електрона пошта</span>
                    <input 
                        className={scss.form_input}
                        required
                        id='email'
                        placeholder="Введіть електрону пошту для подальшого зв'язку"
                        name='email'
                        type='email'
                        autoComplete='off'
                        value={data.email}
                        onChange={onChangeForm}
                    />
                </label>
                <label className={scss.form_label}>
                    <span className={scss.form_input_name}>Номер телефону</span>
                    <input 
                        className={scss.form_input}
                        required
                        id='phone'
                        placeholder="Введіть номер телефону для подальшого зв'язку"
                        name='phone'
                        minLength="7"
                        type='tel'
                        autoComplete='off'
                        value={data.phone}
                        onChange={onChangeForm}
                    />
                </label>
                <label className={scss.form_label}>
                    <span className={scss.form_input_name}>Населений пункт</span>
                    <input 
                        className={scss.form_input}
                        required
                        id='location'
                        placeholder="Введіть назву міста з якого відбувається запит на допомогу або актуальне місцезнаходження"
                        name='location'
                        minLength="2"
                        type='text'
                        autoComplete='off'
                        value={data.location}
                        onChange={onChangeForm}
                    />
                </label>
                <label className={scss.form_label}>
                    <span className={scss.form_input_name}>Опис проблеми</span>
                    <input 
                        className={scss.form_input}
                        required
                        id='reason'
                        placeholder="Опишіть проблему, з метою подолання якої ви звернулися до фонду"
                        name='reason'
                        minLength="3"
                        type='text'
                        autoComplete='off'
                        value={data.reason}
                        onChange={onChangeForm}
                    />
                </label>
                <label className={scss.form_label}>
                    <span className={scss.form_input_name}>Необхідна допомога</span>
                    <input 
                        className={scss.form_input}
                        required
                        id='help'
                        placeholder="Опишіть, що вам необхідно для подолання проблеми"
                        name='help'
                        minLength="3"
                        type='text'
                        autoComplete='off'
                        value={data.help}
                        onChange={onChangeForm}
                    />
                </label>
            </div>
            <div className={scss.form_files}>
                <label htmlFor="file" className={scss.button_input_file}>Завантажити файл</label>
                <input
                    className={scss.input_file}
                    type='file'
                    name="file"
                    id='file'
                    accept="image/png, image/jpeg, image/jpg .doc, .pdf, .docx, .xlsx, .xls"
                />
            </div>
            <div className={scss.form_checkbox}>
                <label>
                    <input
                        className={scss.form_input_checkbox}
                        type='checkbox'
                        value="Підтверджено"
                        name="agreement"
                        id='agreement'
                        required
                        onChange={onChangeForm}
                    />
                    <span className={scss.form_input_checkbox_custom}></span>
                </label>
                <span className={scss.form_checkbox_text}>Я даю згоду на обробку моїх персональних данних</span>
            </div>
            <button type='submit' className={scss.button_submit}>Відправити запит</button>
        </form>
    );
};

export default HelpRequestIndividual; 