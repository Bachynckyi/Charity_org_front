import React, {useEffect, useState} from 'react';
import scss from "./HelpOfferPage.module.scss";
import { Link } from 'react-router-dom';
import BankDetails from 'components/BankDetails/BankDetails';
import ContactForm from 'components/ContactForm/ContactForm';
import OfferPartner from 'components/OfferPartner/OfferPartner';
import { useDispatch } from 'react-redux';
import { getMonoLink } from '../../redux/data/data-operations';
import { motion } from 'framer-motion';

const HelpOfferPage = () => {
    const [typeHelp, setTypeHelp] = useState("payment");
    const [monoLink, SetMonoLink] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMonoLink())
            .then(response => SetMonoLink(response.payload[0].monoLink));
      }, [dispatch]);

    const onChange = (event) => {
        setTypeHelp(event.target.value)
    };

    return (
        <motion.div
        transition={{ duration: 0.4}}
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}>
            <div className={scss.container}>
                <div className={scss.title_container}>
                    <h1 className={scss.title}>Надати допомогу</h1>
                </div>
                <div className={scss.wrapper}>
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
                    {monoLink.length !== 0 && (<Link className={scss.link_mono} to={monoLink} target='_blank'>МОНОБАНКА</Link>)}
                    {typeHelp === "payment" && (<BankDetails/>)}
                    {typeHelp === "becomePartner" && (<OfferPartner/>)}
                    {typeHelp === "otherHelp" && (<ContactForm/>)}
                </div>
            </div>
        </motion.div>
    );
};

export default HelpOfferPage; 