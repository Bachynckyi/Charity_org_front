import React, { useState } from 'react';
import scss from "./BankDetails.module.scss";

const bankDetailsInfo = {
    "UAH": {
        "IBAN": "UA00 0000 0000 0000 0000 0000 0000 0",
        "VAT": " 00000000",
    },

    "USD": {
        "IBAN": "UA00 0000 0000 0000 0000 0000 0000 1",
        "account": "000-0000-001",
        "code": " xxxxxxxx1",
    },
    "EUR": {
        "IBAN": "UA00 0000 0000 0000 0000 0000 0000 2",
        "account": "000-0000-002",
        "code": " xxxxxxxx2",
    },
    "GBP": {
        "IBAN": "UA00 0000 0000 0000 0000 0000 0000 3",
        "account": "000-0000-003",
        "code": " xxxxxxxx3",
    },
    "PLN": {
        "IBAN": "UA00 0000 0000 0000 0000 0000 0000 4",
        "account": "000-0000-004",
        "code": " xxxxxxxx4",
    },
    "CAD": {
        "IBAN": "UA00 0000 0000 0000 0000 0000 0000 5",
        "account": "000-0000-005",
        "code": " xxxxxxxx6",
    },
};

const BankDetails = () => {
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
        <div className={scss.details_container}>
            <span className={scss.payment_details}>Для оплати за реквізитами:</span>
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
              <label className={scss.input_option} htmlFor="GBP"> 
                  <input
                      className={scss.radio_button}
                      type="radio"
                      id="GBP"
                      name="currency"
                      value="GBP"
                      onChange={onChange}
                  />
                  <span className={scss.custom_button}></span>
                  <span className={scss.input_name}>GBP</span>
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
              <label className={scss.input_option} htmlFor="CAD"> 
                  <input
                      className={scss.radio_button}
                      type="radio"
                      id="CAD"
                      name="currency"
                      value="CAD"
                      onChange={onChange}
                  />
                  <span className={scss.custom_button}></span>
                  <span className={scss.input_name}>CAD</span>
              </label>
            </div>
            <div className={scss.details_wrapper}>
                {currency === "UAH" ? (
                    <>
                    <p className={scss.details_name_IBAN}>IBAN {details.IBAN}</p>
                    <p className={scss.details_name_VAT}>ЄРДПОУ {details.VAT}</p>
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
              <span className={scss.name_company}>Найменування українською мовою (для переказів всередині країни) — БФ «МІЖНАРОДНИЙ БЛАГОДІЙНИЙ ФОНД ГОРИЗОНТ ЄДНОСТІ»</span>
              <span className={scss.name_company_attribute}>Name of Company for transfers from abroad – CHARITABLE FOUNDATION «INTERNATIONAL CHARITABLE FOUNDATION UNITY HORIZON»</span>
              <span className={scss.name_company_attribute}>Bank of Beneficiary (for everything) xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</span>
            </div>
            <span className={scss.name_text}>ДЯКУЄМО КОЖНОМУ НЕБАЙДУЖОМУ!</span>
        </div>
    </div>
  );
};

export default BankDetails; 