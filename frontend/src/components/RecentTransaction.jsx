import React from 'react';

import '../styles/TransactionItem.scss';
import '../styles/RecentTransaction.scss';
import { Button } from "@mui/material";
import TransactionItem from './TransactionItem';
import ButtonStandard from './ButtonStandard';
import ButtonAll from './ButtonAll';

const RecentTransaction = (props) => {



  return (
    <section className='recent-transactions'>
      <h2 id='body-title' className='title'>Recent Transactions</h2>
      <TransactionItem transactionData={props.transactionData} slice={true}/>
      <footer className='transactions-footer'>
        <div>
          <ButtonStandard buttonName={'Add Expense'} />
          <ButtonStandard buttonName={'Add Payment'} />
        </div>
        <ButtonAll />
      </footer>
    </section>
  );
};

export default RecentTransaction;