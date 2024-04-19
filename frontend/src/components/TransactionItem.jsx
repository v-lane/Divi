import React from 'react';
import { format } from 'date-fns';
import LaunchButton from './LaunchButton';

const TransactionItem = (props) => {
  const { transaction, group, user, amount, users } = props;

  // let slice = true;
  // slice = props.slice;
  // let transactions = []
  // slice ? transactions = props.transactionData.flat().slice(0, 5) : transactions = props.transactionData.flat();


  return (
    <li className='transaction'>
     { group ? 
     <p className='transaction-group'>Group: {group.name} <LaunchButton color={0} /></p> : 
     <p className='transaction-user'>Group Member: {users[transaction.user_id].username} </p>
     }
      <p>
        {transaction.transaction_type == 'Payment' ?
          <span className='sent-posted-heading'>Sent By: { user ? user.username : users[transaction.user_id].username} </span> :
          <span className='sent-posted-heading'>Posted By: { user ? user.username : users[transaction.user_id].username}</span>}
        <span className={transaction.transaction_type} >${amount}</span>
      </p>
      <p className='transaction-date'><span>Transaction Date: {format(new Date(transaction.transaction_date), 'MMMM dd, yyyy')}</span><span className={transaction.transaction_type}>{transaction.transaction_type}</span></p>
    </li>
  );
};

export default TransactionItem;