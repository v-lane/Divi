import React from 'react'

const TransactionItem = (props) => {

  const transactions = [
    {id: 1, group_id: 10, transaction_type: 'expense', amount: 120, user_id: 34, transaction_date: '04/15/2024', is_deleted: false},
    {id: 2, group_id: 11, transaction_type: 'expense', amount: 140, user_id: 35, transaction_date: '04/15/2024', is_deleted: false},
    {id: 3, group_id: 12, transaction_type: 'expense', amount: 190, user_id: 36, transaction_date: '04/15/2024', is_deleted: false},
  ];

  return (
    <article>
    {transactions.map(transaction => (
      <div className='transaction' key={transaction.id}>
        <p><span>Group Name, id ({transaction.group_id})</span></p>
        <p><span>Transaction Type: {transaction.transaction_type}</span><span>${transaction.amount}</span></p>
        <p><span>{transaction.transaction_date}</span><span>{transaction.user_id}</span></p>
      </div>
    ))}
  </article>
  );
};

export default TransactionItem;