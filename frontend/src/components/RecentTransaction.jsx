import React from 'react'

import '../styles/TransactionItem.scss'
import TransactionItem from './TransactionItem';

const RecentTransaction = (props) => {

  

  return (
    <>
      <TransactionItem transactionData={props.transactionData}/>
    </>
  );
};

export default RecentTransaction;