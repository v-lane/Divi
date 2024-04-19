import React from 'react';

import '../styles/TransactionItem.scss';
import '../styles/RecentTransaction.scss';
import { Link, useLocation } from "react-router-dom";
import TransactionItem from './TransactionItem';
import ButtonStandard from './ButtonStandard';
import ButtonAll from './ButtonAll';

const RecentTransaction = (props) => {
  const { openModal, transactionData } = props;
  const location = useLocation();

  const recentTransactionData = (transactionData && transactionData.flat().slice(0, 5))

  return (
    <section className='recent-transactions'>
      <h2 id='body-title' className='title'>Recent Transactions</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
      {recentTransactionData && recentTransactionData.map(transaction => (
        <TransactionItem transactionData={transactionData} slice={true} 
        key={transaction.id}
        transaction={transaction}
        group={transaction.group}
        user={transaction.user}
        amount={transaction.amount}
        />
      ))}
      </ul>
      <footer className='transactions-footer'>
        <div>
          <Link to='add-expense' state={{ background: location }} onClick={(() => openModal('add-expense'))} >
            <ButtonStandard buttonName={'Add Expense'} />
          </Link>
          <Link to='add-payment' state={{ background: location }} onClick={(() => openModal('add-payment'))} >
            <ButtonStandard buttonName={'Add Payment'} />
          </Link>
        </div>
        <Link to='all_transactions'>
          <ButtonAll />
        </Link>
      </footer>
    </section>
  );
};

export default RecentTransaction;