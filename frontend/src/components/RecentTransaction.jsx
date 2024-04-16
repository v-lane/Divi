import React from 'react'

import '../styles/TransactionItem.scss'
import '../styles/RecentTransaction.scss'
import { Button } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import TransactionItem from './TransactionItem';

const RecentTransaction = (props) => {

  

  return (
    <>
    <h1 id='body-title' className='title'>RECENT TRANSACTIONS</h1>
      <TransactionItem transactionData={props.transactionData}/>
      <footer className='transactions-footer'>
        <Button className="transaction-button" variant="contained" color="info">Add Expense</Button>
        <Button className="transaction-button" variant="contained" color="info">Add Payment</Button>
        <Button className="transaction-button" variant="contained" color="info"><ArrowForwardIcon/></Button>
      </footer>
    </>
  );
};

export default RecentTransaction;