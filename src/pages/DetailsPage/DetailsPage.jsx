import React  from 'react';
import scss from "./DetailsPage.module.scss";
import BankDetails from 'components/BankDetails/BankDetails';
import { motion } from 'framer-motion';

const DetailsPage = () => {

  return (
    <motion.div
    transition={{ duration: 0.4}}
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}>
      <div className={scss.container}>
          <div className={scss.title_container}>
            <span className={scss.title}>Реквізити</span>
          </div>
          <div className={scss.bank_details_container}>
            <BankDetails/>
          </div>
      </div>
    </motion.div>
  );
};

export default DetailsPage; 