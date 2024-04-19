import React from 'react';
import { format } from 'date-fns';
import LaunchButton from '../LaunchButton';
import '/src/styles/TransactionDetails.scss'

const TransactionDetails = (props) => {
   const { transactions, activeTransactionDetails, group, isLoading } = props; 

  const transaction = activeTransactionDetails;

  if (isLoading) {
    return <div>Loading...</div>
  }


  return (
    <ul style={{ listStyleType: 'none', padding: 0 }}>
         <li className='transaction' key={transaction.id}>
          <p className='transaction-group'>Group: {transaction.group.name} <LaunchButton color={0} /></p>
          <p>
            {transaction.transaction_type == 'Payment' ?
              <span className='sent-posted-heading'>Sent By: {transaction.user.username} </span> :
              <span className='sent-posted-heading'>Posted By: {transaction.user.username}</span>}
            <span className={transaction.transaction_type} >${transaction.amount}</span>
          </p>
          <p className='transaction-date'><span>Transaction Date: {format(new Date(transaction.transaction_date), 'MMMM dd, yyyy')}</span><span className={transaction.transaction_type}>{transaction.transaction_type}</span></p>
        </li> 
    </ul>
  );
};

export default TransactionDetails;