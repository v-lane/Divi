import React from 'react';
import { format } from 'date-fns';
import LaunchButton from './LaunchButton';

const TransactionItem = (props) => {
  const { transaction, group, user, amount } = props;

  // let slice = true;
  // slice = props.slice;
  // let transactions = []
  // slice ? transactions = props.transactionData.flat().slice(0, 5) : transactions = props.transactionData.flat();


  return (
    <li className='transaction'>
      <p className='transaction-group'>Group: {group.name} <LaunchButton color={0} /></p>
      <p>
        {transaction.transaction_type == 'Payment' ?
          <span className='sent-posted-heading'>Sent By: {user.username} </span> :
          <span className='sent-posted-heading'>Posted By: {user.username}</span>}
        <span className={transaction.transaction_type} >${amount}</span>
      </p>
      <p className='transaction-date'><span>Transaction Date: {format(new Date(transaction.transaction_date), 'MMMM dd, yyyy')}</span><span className={transaction.transaction_type}>{transaction.transaction_type}</span></p>
    </li>
  );
};

export default TransactionItem;