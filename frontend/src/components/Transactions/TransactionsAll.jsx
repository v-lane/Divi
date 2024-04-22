import React from "react";
import TransactionItem from "./TransactionItem";
import ButtonAll from "../ButtonAll";
import ButtonStandard from "../ButtonStandard";
import { Link, useLocation } from 'react-router-dom';
import '../../styles/TransactionAll.scss';

const TransactionsAll = (props) => {
  const { transactionData, openModal, users, activeGroupDetails, activeGroupTransactions, setActiveTransaction, activeGroup } = props;
  const location = useLocation();

  return (
    <>
      <h1>{activeGroup ? `All Transactions for ${activeGroupDetails.name}` : `All Transactions`}</h1>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {activeGroup && transactionData.map(transaction => (
          <TransactionItem
            key={transaction.id}
            transaction={transaction}
            group={transaction.group}
            user={transaction.user}
            amount={transaction.amount}
            users={users}
            openModal={openModal}
            setActiveTransaction={setActiveTransaction}
          />
        ))}

        {!activeGroup && transactionData.map(transaction => (
          <TransactionItem
            key={transaction.id}
            transaction={transaction}
            group={transaction.group}
            user={transaction.user}
            amount={transaction.amount}
            setActiveTransaction={setActiveTransaction}

          />
        ))}
      </ul>
      <footer className='all-transactions-footer'>

        {activeGroup ?
          <div>
            <Link to={`group/${activeGroup}/dashboard/all_transactions/add-expense`} state={{ background: location }} onClick={(() => openModal('add-expense'))} >
              <ButtonStandard buttonName={'Add Expense'} />
            </Link>
            <Link to={`group/${activeGroup}/dashboard/all_transactions/add-payment`} state={{ background: location }} onClick={(() => openModal('add-payment'))}>
              <ButtonStandard buttonName={'Add Payment'} />
            </Link>
          </div>
          :
          <div>
            <Link to='add-expense' state={{ background: location }} onClick={(() => openModal('add-expense'))} >
              <ButtonStandard buttonName={'Add Expense'} />
            </Link>
            <Link to='add-payment' state={{ background: location }} onClick={(() => openModal('add-payment'))}>
              <ButtonStandard buttonName={'Add Payment'} />
            </Link>
          </div>
        }


      </footer>
    </>
  );
};

export default TransactionsAll;