import React from 'react';

import '../styles/TransactionItem.scss';
import '../styles/RecentTransaction.scss';
import { Button } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import TransactionItem from './TransactionItem';

const RecentTransaction = (props) => {



  return (
    <section className='recent-transactions'>
      <h2 id='body-title' className='title'>Recent Transactions</h2>
      <TransactionItem transactionData={props.transactionData} />
      <footer className='transactions-footer'>
        <div>
          <Button className="transaction-button-expense" variant="contained" color="error">Add Expense</Button>
          <Button className="transaction-button-payment" variant="contained" color="success">Add Payment</Button>
        </div>
        <Button className="transaction-button-more" variant="contained" color="info"><ArrowForwardIcon /></Button>
      </footer>
    </section>
  );
};

export default RecentTransaction;