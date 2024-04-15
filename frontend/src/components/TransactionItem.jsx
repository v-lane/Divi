import React from 'react'
import { format } from 'date-fns'

const TransactionItem = (props) => {

const transactions = props.transactionData.flat();
console.log(transactions)

  
  return (
    <ul style={{ listStyleType: 'none', padding: 0 }}>
    {Array.isArray(transactions) && transactions.map(transaction => (
      <li className='transaction' key={transaction.id}>
        <p>Group Name: {transaction.group.name}</p>
        <p><span>Transaction Type: {transaction.transaction_type}</span>${transaction.amount}</p>
        <p><span>Posted On: {format(new Date(transaction.transaction_date), 'MMMM dd, yyyy')}</span><span>Posted By: {transaction.user.username}</span></p>
      </li>
        ))}
    </ul>
  )
};

export default TransactionItem;