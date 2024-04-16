import React from 'react'
import { format } from 'date-fns'
import LaunchButton from './LaunchButton';

const TransactionItem = (props) => {

const transactions = props.transactionData.flat().slice(0, 5);

  
  return (
    <ul style={{ listStyleType: 'none', padding: 0 }}>
    {Array.isArray(transactions) && transactions.map(transaction => (
      <li className='transaction' key={transaction.id}>
        <p>Group Name: {transaction.group.name} <LaunchButton className='transaction-launch'/></p>
        <p>{transaction.transaction_type == 'Payment' ? <span>Sent By: {transaction.user.username}</span> : <span>Posted By: {transaction.user.username}</span>}<span className={transaction.transaction_type} >${transaction.amount}</span></p>
        <p><span>Date: {format(new Date(transaction.transaction_date), 'MMMM dd, yyyy')}</span><span className={transaction.transaction_type}>Transaction Type: {transaction.transaction_type}</span></p>
      </li>
        ))}
    </ul>
  )
};

export default TransactionItem;