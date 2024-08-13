import React, { useState } from 'react';
import scss from "./BankDetails.module.scss"
import { useTranslation } from 'react-i18next';

const bankDetailsInfo = {
    "UAH": {
        "IBAN": "UA 36 325365 0000000260080054194",
        "VAT": " 45502942",
    },

    "USD": {
        "IBAN": "UA 54 325365 0000000260050054195",
        "account": "000-0000-001",
        "code": " xxxxxxxx1",
    },
    "EUR": {
        "IBAN": "UA 72 325365 0000000260020054196",
        "account": "000-0000-002",
        "code": " xxxxxxxx2",
    },
    "PLN": {
        "IBAN": "UA 55 325365 0000000260060054198",
        "account": "000-0000-004",
        "code": " xxxxxxxx4",
    },
};

const BankDetails = () => {
  const { t } = useTranslation();
  const [currency, setCurrency] = useState("UAH");
  const [details, setDetails] = useState({
    "IBAN": "UA00 0000 0000 0000 0000 0000 0000 0",
    "VAT": " 00000000",
  });

  const onChange = (event) => {
    setCurrency(event.target.value)
    const currentBankDetails = bankDetailsInfo[event.target.value]
    setDetails(currentBankDetails)
  };

  return (
    <div className={scss.container}>
        <span className={scss.title}></span>
        <div className={scss.input_container}>
            <label className={scss.input_option} htmlFor="UAH"> 
                <input
                    className={scss.radio_button}
                    type="radio"
                    id="UAH"
                    name="currency"
                    value="UAH"
                    onChange={onChange}
                    checked={currency === "UAH"}
                />
                <span className={scss.custom_button}></span>
                <span className={scss.input_name}>UAH</span>
            </label>
            <label className={scss.input_option} htmlFor="USD"> 
                <input
                    className={scss.radio_button}
                    type="radio"
                    id="USD"
                    name="currency"
                    value="USD"
                    onChange={onChange}
                />
                <span className={scss.custom_button}></span>
                <span className={scss.input_name}>USD</span>
            </label>
            <label className={scss.input_option} htmlFor="EUR"> 
                <input
                    className={scss.radio_button}
                    type="radio"
                    id="EUR"
                    name="currency"
                    value="EUR"
                    onChange={onChange}
                />
                <span className={scss.custom_button}></span>
                <span className={scss.input_name}>EUR</span>
            </label>
            <label className={scss.input_option} htmlFor="PLN"> 
                <input
                    className={scss.radio_button}
                    type="radio"
                    id="PLN"
                    name="currency"
                    value="PLN"
                    onChange={onChange}
                />
                <span className={scss.custom_button}></span>
                <span className={scss.input_name}>PLN</span>
            </label>
        </div>
        <div className={scss.details_wrapper}>
            {currency === "UAH" ? (
                <>
                <p className={scss.details_name_IBAN}>IBAN {details.IBAN}</p>
                <p className={scss.details_name_VAT}>{t("BankDetails_details_name_VAT")} {details.VAT}</p>
                </>
            ) : (
                <>
                <p className={scss.details_name_IBAN}>IBAN {details.IBAN}</p>
                <p className={scss.details_name_account}>Correspondent Account {details.account}</p>
                <p className={scss.details_name_code}>SWIFTcode: {details.code}</p>
                </>
            )}
        </div>
        <div className={scss.name_container}>
            <span className={scss.name_company}>{t("BankDetails_name_company")} — БО «МБФ "ГОРИЗОНТ ЄДНОСТІ"»</span>
            <span className={scss.name_company_attribute}>The Recipient – BO «MBF „HORYZONT YEDNOSTI“»</span>
            {/* <span className={scss.name_company_attribute}>
                Bank of Beneficiary (for everything) 
                <p className={scss.name_company_bank}>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
            </span> */}
        </div>
        <span className={scss.name_text}>{t("BankDetails_name_text")}</span>
    </div>
  );
};

export default BankDetails; 