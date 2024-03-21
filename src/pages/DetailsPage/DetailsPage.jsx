import React from 'react';
import scss from "./DetailsPage.module.scss";

const DetailsPage = () => {

  return (
    <div className={scss.container}>
        <div className={scss.title_container}>
            <span className={scss.title}>Реквізити</span>
        </div>
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
                  />
                  <span className={scss.custom_button}></span>
                  <span className={scss.input_name}>CAD</span>
              </label>
            </div>
            <div className={scss.name_container}>
              <span className={scss.name_company}>Найменування українською мовою (для переказів всередині країни) — БФ «МІЖНАРОДНИЙ БЛАГОДІЙНИЙ ФОНД ГОРИЗОНТ ЄДНОСТІ»</span>
              <span className={scss.name_company}>Name of Company for transfers from abroad – CHARITABLE FOUNDATION «INTERNATIONAL CHARITABLE FOUNDATION UNITY HORIZON»</span>
            </div>
            <span className={scss.name_text}>ДЯКУЄМО КОЖНОМУ НЕБАЙДУЖОМУ!</span>
        </div>
    </div>
  );
};

export default DetailsPage; 