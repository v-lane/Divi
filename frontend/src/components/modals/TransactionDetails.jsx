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
         <section className='transaction-details ' key={transaction.id}>
          <span className='transaction-details-group'> Group: &nbsp; <span className='group'>{transaction.group.name}</span></span>
          <p>
            {transaction.transaction_type == 'Payment' ?
              <span className='sent-posted-heading'>Sent By: {transaction.user.username} </span> :
              <span className='sent-posted-heading'>Posted By: {transaction.user.username}</span>}
            <span className={transaction.transaction_type} >${transaction.amount}</span>
          </p>
          <p className='transaction-date'><span>Transaction Date: {format(new Date(transaction.transaction_date), 'MMMM dd, yyyy')}</span><span className={transaction.transaction_type}>{transaction.transaction_type}</span></p>
        </section> 
  );
};

export default TransactionDetails;