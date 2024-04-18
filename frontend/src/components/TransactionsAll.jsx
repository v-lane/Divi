import React from "react";
import TransactionItem from "./TransactionItem";
import ButtonAll from "./ButtonAll";
import ButtonStandard from "./ButtonStandard";
import '../styles/TransactionAll.scss'

const TransactionsAll = (props) => {
  const { transactionData } = props

  return (
    <>
      <h1>All Transactions</h1>
      <TransactionItem transactionData={transactionData} slice={false}/>
      <footer className='all-transactions-footer'>
        <div>
          <ButtonStandard buttonName={'Add Expense'} />
          <ButtonStandard buttonName={'Add Payment'} />
        </div>
        <ButtonAll />
      </footer>
    </>
  );
};

export default TransactionsAll;