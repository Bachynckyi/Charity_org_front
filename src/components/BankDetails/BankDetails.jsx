import React from 'react';
import scss from './BankDetails.module.scss';

const BankDetails = () => {

  return (
    <div className={scss.container}>
        <h3>Банківські реквізити</h3>
        <ul className={scss.details_list}>
            <li>"Lorem ipsum dolor sit amet</li>
            <li>"Lorem ipsum dolor sit amet</li>
            <li>"Lorem ipsum dolor sit amet</li>
            <li>"Lorem ipsum dolor sit amet</li>
        </ul>        
    </div>
  );
};

export default BankDetails;