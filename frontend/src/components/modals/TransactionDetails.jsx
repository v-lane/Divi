import React from 'react';
import { format } from 'date-fns';
import '/src/styles/TransactionDetails.scss';

const TransactionDetails = (props) => {
  const { activeTransactionDetails, isLoading } = props;

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
          {transaction.member_transactions.map((memberTransaction) => (
            <p className='balance' key={memberTransaction.id}>
              {transaction.transaction_type == 'Payment' ?
                <>
                 {memberTransaction.recipient_username} received: ${memberTransaction.amount}
                </>
                :
                <>
                  {memberTransaction.recipient_username} owes: ${memberTransaction.amount}
                </>
              }
            </p>
          ))}
        </div>
        <p className='transaction-date'><span>Transaction Date: {format(new Date(transaction.transaction_date), 'MMMM dd, yyyy')}</span></p>
      </section>}
    </>
  );
};

export default TransactionDetails;