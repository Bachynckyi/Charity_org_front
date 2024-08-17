import React, { useState } from 'react';
import scss from "./BankDetails.module.scss"
import { useTranslation } from 'react-i18next';

const bankDetailsInfo = {
    "UAH": {
        "IBAN": "UA 36 325365 0000000260080054194",
        "VAT": "45502942",
    },

    "USD": {
        "IBAN": "UA 54 325365 0000000260050054195",
        "account1": "BANK OF NEW YORK MELLON, New York, USA",
        "SWIFTcode1": "IRVTUS3N",
        "account2": "RAIFFEISEN BANK INTERNATIONAL AG, VIENNA, AUSTRIA",
        "SWIFTcode2": "RZBAATWW",
    },
    "EUR": {
        "IBAN": "UA 72 325365 0000000260020054196",
        "account1": "KBC BANK NV, Brussels, Belgium",
        "SWIFTcode1": "KREDBEBB",
        "account2": "COMMERZBANK AG, Frankfurt, Germany",
        "SWIFTcode2": "COBADEFF",
        "account3": "UNICREDIT SPA, Milano, Italy",
        "SWIFTcode3": "UNCRITMM",
        "account4": "RAIFFEISEN BANK INTERNATIONAL AG, Vienna, Austria",
        "SWIFTcode4": "RZBAATWW",
    },
    "PLN": {
        "IBAN": "UA 55 325365 0000000260060054198",
        "account1": "POWSZECHNA KASA OSZCZEDNOSCI BANK POLSKI SA, WARSZAWA, POLAND ",
        "SWIFTcode1": "BPKOPLPW",
    },
};

const BankDetails = () => {
  const { t } = useTranslation();
  const [currency, setCurrency] = useState("UAH");

  const onChange = (event) => {
    setCurrency(event.target.value);
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
                <p className={scss.details_name_IBAN}>IBAN: {bankDetailsInfo[currency].IBAN}</p>
                <p className={scss.details_name_VAT}>{t("BankDetails_details_name_VAT")}: {bankDetailsInfo[currency].VAT}</p>
                <p className={scss.details_name_VAT}>{t("BankDetails_bank_name")}</p>
                <p className={scss.details_name_VAT}>{t("BankDetails_bank_purpose")} Поповнення рахунку № UA 36 325365 0000000260080054194, БО "МБФ "Горизонт Єдності", 45502942</p>
                <p className={scss.details_name_VAT}>{t("BankDetails_bank_recipient")} БО "МБФ "Горизонт Єдності"</p>
                </>
            ) : (
                <>
                <p className={scss.details_name_IBAN}>IBAN: {bankDetailsInfo[currency].IBAN}</p>
                <p className={scss.details_name_VAT}>{t("BankDetails_bank_name")}</p>
                <p className={scss.details_name_code}>SWIFT: WUCBUA2X</p>
                <p className={scss.details_name_account}>{t("BankDetails_bank_intermediary")} {bankDetailsInfo[currency].account1}</p>
                <p className={scss.details_name_account}>SWIFT: {bankDetailsInfo[currency].SWIFTcode1}</p>
                {bankDetailsInfo[currency].account2 && (
                    <>
                        <p className={scss.details_name_account}>{t("BankDetails_bank_intermediary")} {bankDetailsInfo[currency].account2}</p>
                        <p className={scss.details_name_account}>SWIFT: {bankDetailsInfo[currency].SWIFTcode2}</p>
                    </>
                )}
                {bankDetailsInfo[currency].account3 && (
                    <>
                        <p className={scss.details_name_account}>{t("BankDetails_bank_intermediary")} {bankDetailsInfo[currency].account3}</p>
                        <p className={scss.details_name_account}>SWIFT: {bankDetailsInfo[currency].SWIFTcode3}</p>
                    </>
                )}
                {bankDetailsInfo[currency].account4 && (
                    <>
                        <p className={scss.details_name_account}>{t("BankDetails_bank_intermediary")} {bankDetailsInfo[currency].account4}</p>
                        <p className={scss.details_name_account}>SWIFT: {bankDetailsInfo[currency].SWIFTcode4}</p>
                    </>
                )}
                </>
            )}
        </div>
        <span className={scss.name_text}>{t("BankDetails_name_text")}</span>
    </div>
  );
};

export default BankDetails; 