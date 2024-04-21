import React  from 'react';
import scss from "./DetailsPage.module.scss";
import BankDetails from 'components/BankDetails/BankDetails';

const DetailsPage = () => {

  return (
    <div className={scss.container}>
        <div className={scss.title_container}>
          <span className={scss.title}>Реквізити</span>
        </div>
        <div className={scss.bank_details_container}>
          <BankDetails/>
        </div>
    </div>
  );
};

export default DetailsPage; 