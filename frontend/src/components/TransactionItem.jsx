import React from 'react';
import { format } from 'date-fns';
import { Link, useLocation } from "react-router-dom";
import { Button } from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';
import LaunchButton from './LaunchButton';


const TransactionItem = (props) => {
  const { openModal, setActiveTransaction, transaction, group, user, amount} = props;
  const location = useLocation();
  
  const {  } = props;

  // let slice = true;
  // slice = props.slice;
  // let transactions = []
  // slice ? transactions = props.transactionData.flat().slice(0, 5) : transactions = props.transactionData.flat();

  const launchTransaction = (transactionId) => {
    setActiveTransaction(transactionId);
  };


  return (
    <li className='transaction'>
     { group && <p className='transaction-group' onClick={(() => launchTransaction(transaction.id))} >Group: {group.name} <LaunchButton goTo={`transaction-details/${transaction.id}`} color={0} openModal={openModal}/></p> }
      <p>
        {transaction.transaction_type == 'Payment' ?
          <span className='sent-posted-heading'>Sent By: {user && user.username} </span> :
          <span className='sent-posted-heading'>Posted By: {user && user.username}</span>}
        <span className={transaction.transaction_type} >${amount}</span>
      </p>
      <p className='transaction-date'><span>Transaction Date: {format(new Date(transaction.transaction_date), 'MMMM dd, yyyy')} &nbsp; |  </span><span className={transaction.transaction_type}>{transaction.transaction_type}</span></p>
    </li>
  );
};

export default TransactionItem;