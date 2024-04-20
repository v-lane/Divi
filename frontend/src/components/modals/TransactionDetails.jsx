import React from 'react';
import { format } from 'date-fns';
import LaunchButton from '../LaunchButton';
import '/src/styles/TransactionDetails.scss';

const TransactionDetails = (props) => {
  const { transactions, activeTransactionDetails, group, isLoading } = props;

  const transaction = activeTransactionDetails;

  return (
    <>
      {!isLoading && <section className='transaction-details' key={transaction.id}>
        <h3> Group: {transaction.group.name}</h3>
        <p className='trans-line'>
          {transaction.transaction_type == 'Payment' ? <> Sent By: </> : <> Posted By: </>}
          {transaction.user.username}
          <span className={transaction.transaction_type} >{transaction.transaction_type} Amount: ${transaction.amount}</span>
        </p>
        <div className='member-balances' >
          <h4>Resulting Balances:</h4>
          {transaction.member_transactions.map((memberTransaction) => {
            return (
              <p className='balance' key={memberTransaction.id}> &nbsp; &nbsp; &nbsp;<span className='member-name'>{memberTransaction.recipient_username}</span>{transaction.transaction_type == 'Payment' ?
                <span>'s amount outstanding from <span className='member-name'>{transaction.user.username}</span> has decreased by <span className={transaction.transaction_type}>${memberTransaction.amount}</span></span> : <span className='balance-line'>'s balance owing to <span className='member-name'>{transaction.user.username}</span> has increased by: <span className={transaction.transaction_type}>${memberTransaction.amount}</span></span>}
              </p>
            );
          })}
        </div>
        <p className='transaction-date'><span>Transaction Date: {format(new Date(transaction.transaction_date), 'MMMM dd, yyyy')}</span></p>
      </section>}
    </>
  );
};

export default TransactionDetails;