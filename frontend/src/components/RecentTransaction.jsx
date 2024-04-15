import React from 'react'

import '../styles/RecentTransaction.scss'
import TransactionItem from './TransactionItem';

const RecentTransaction = (props) => {

  return (
    <article>
      <TransactionItem/>
    </article>
  );
};

export default RecentTransaction;