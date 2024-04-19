import React from 'react';
import { format } from 'date-fns';
import LaunchButton from '../LaunchButton';
import '/src/styles/TransactionDetails.scss'

const TransactionDetails = (props) => {
   const { transactions, activeTransactionDetails, group, isLoading } = props; 

  const transaction = activeTransactionDetails;

  return (
    <>
      {!isLoading && <section className='transaction-details' key={transaction.id}>
      <span className='transaction-details-group'> Group: &nbsp; <span className='group'>{transaction.group.name}</span></span>
      <p className='trans-line'>
        {transaction.transaction_type == 'Payment' ?
          <span className='sent-posted-heading'>Sent By: {transaction.user.username} </span> :
          <span className='sent-posted-heading'>Posted By: {transaction.user.username}</span>}
        <span className={transaction.transaction_type} >{transaction.transaction_type} Amount: ${transaction.amount}</span>
      </p>
      <div className='member-balances' >
        <p className='balances-header'>Resulting Balances:</p>
        {transaction.member_transactions.map((memberTransaction) => {
          return (
          <p className='balance' key={memberTransaction.id}> &nbsp; &nbsp; &nbsp;<span className='member-name'>{memberTransaction.recipient_username}</span>{transaction.transaction_type == 'Payment' ?
          <span>'s amount outstanding from <span className='member-name'>{transaction.user.username}</span> has decreased by <span className={transaction.transaction_type}>${memberTransaction.amount}</span></span> : <span className='balance-line'>'s balance owing to <span className='member-name'>{transaction.user.username}</span> has increased by: <span className={transaction.transaction_type}>${memberTransaction.amount}</span></span> }
          </p>
          )
        })}
      </div>
      <p className='transaction-date'><span>Transaction Date: {format(new Date(transaction.transaction_date), 'MMMM dd, yyyy')}</span></p>
    </section>}
  </>
  );
};

export default TransactionDetails;