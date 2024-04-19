import React from "react";
import TransactionItem from "./TransactionItem";
import ButtonAll from "./ButtonAll";
import ButtonStandard from "./ButtonStandard";
import { Link, useLocation } from 'react-router-dom'
import '../styles/TransactionAll.scss'

const TransactionsAll = (props) => {
  const { transactionData, openModal } = props
  const location = useLocation();

  return (
    <>
      <h1>All Transactions</h1>
      <TransactionItem transactionData={transactionData} slice={false}/>
      <footer className='all-transactions-footer'>
        <div>
          <Link to="add-expense" state={{ background: location }} onClick={(() => openModal('add-expense'))} >
          <ButtonStandard buttonName={'Add Expense'} />
          </Link>
          <Link to="add-payment" state={{ background: location }} onClick={(() => openModal('add-payment'))}>
          <ButtonStandard buttonName={'Add Payment'} />
          </Link>
        </div>
      </footer>
    </>
  );
};

export default TransactionsAll;