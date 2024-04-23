import React from 'react';
import { format } from 'date-fns';
import LaunchButton from '../LaunchButton';
import '../../styles/TransactionItem.scss';

const TransactionItem = (props) => {
  const { openModal, setActiveTransaction, transaction, group, user, amount } = props;

  const { } = props;

  const launchTransaction = (transactionId) => {
    setActiveTransaction(transactionId);
  };

  return (
    <li className='transaction'>
      {group && <p className='transaction-group' onClick={(() => launchTransaction(transaction.id))} >Group: {group.name} <LaunchButton goTo={`transaction-details/${transaction.id}`} color={0} openModal={openModal} /></p>}
      <p className='sent-posted-heading'>
        {transaction.transaction_type == 'Payment' ?
          <> Sent By: {user && user.username} </> :
          <> Posted By: {user && user.username}</>}
        <span className={transaction.transaction_type} >${amount}</span>
      </p>
      <p className='sent-posted-heading'>
        Sent To:
        {transaction.recipient_id === null ?
          <> All Group Members </> :
          <> Individual </>
        } 
        (Click top right for more details)
      </p>
      <p className='transaction-date'><span>Transaction Date: {format(new Date(transaction.transaction_date), 'MMMM dd, yyyy')} </span><span className={transaction.transaction_type}>{transaction.transaction_type}</span></p>
    </li>
  );
};

export default TransactionItem;