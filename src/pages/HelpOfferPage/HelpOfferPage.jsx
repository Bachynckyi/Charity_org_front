import React, {useState} from 'react';
import scss from "./HelpOfferPage.module.scss";
import { Link } from 'react-router-dom';
import BankDetails from 'components/BankDetails/BankDetails';
import ContactForm from 'components/ContactForm/ContactForm';
import OfferPartner from 'components/OfferPartner/OfferPartner';


const HelpOfferPage = () => {
    const [typeHelp, setTypeHelp] = useState("payment");

    const onChange = (event) => {
        setTypeHelp(event.target.value)
    };

    return (
        <div className={scss.container}>
            <div className={scss.title_container}>
                <h1 className={scss.title}>Надати допомогу</h1>
            </div>
            <form className={scss.form_container}>
                <span className={scss.form_title}>Оберіть вид допомоги</span>
                <div className={scss.form_selector}>
                        <label className={scss.input_option} htmlFor="payment"> 
                        <input
                            className={scss.radio_button}
                            type="radio"
                            id="payment"
                            name="typeHelp"
                            value="payment"
                            checked={typeHelp === "payment"}
                            onChange={onChange}
                        />
                        <span className={scss.custom_button}></span>
                        <span className={scss.input_name}>Здійснити грошову допомогу</span>
                        </label>
                        <label className={scss.input_option} htmlFor="becomePartner"> 
                            <input
                                className={scss.radio_button}
                                type="radio"
                                id="becomePartner"
                                name="typeHelp"
                                value="becomePartner"
                                onChange={onChange}
                            />
                            <span className={scss.custom_button}></span>
                            <span className={scss.input_name}>Запропонувати партнерство</span>
                        </label>
                        <label className={scss.input_option} htmlFor="otherHelp"> 
                            <input
                                className={scss.radio_button}
                                type="radio"
                                id="otherHelp"
                                name="typeHelp"
                                value="otherHelp"
                                onChange={onChange}
                            />
                            <span className={scss.custom_button}></span>
                            <span className={scss.input_name}>Запропонувати іншу допомогу</span>
                        </label>
                </div>
                <Link className={scss.link_mono} to="#">МОНОБАНКА</Link>
                {typeHelp === "payment" && (<BankDetails/>)}
                {typeHelp === "becomePartner" && (<OfferPartner/>)}
                {typeHelp === "otherHelp" && (<ContactForm/>)}
            </form>

        </div>
    );
};

export default HelpOfferPage; 