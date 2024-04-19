import React from 'react';
import { format } from 'date-fns';
import { Link, useLocation } from "react-router-dom";
import { Button } from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';


const TransactionItem = (props) => {
  const { openModal, setActiveTransaction } = props;
  const location = useLocation();
  
  let slice = true;
  slice = props.slice;

  let transactions = []

  slice ? transactions = props.transactionData.flat().slice(0, 5) : transactions = props.transactionData.flat();

  const launchTransaction = (transactionId) => {
    setActiveTransaction(transactionId);
    openModal('transaction-details');
  };


  return (
    <ul style={{ listStyleType: 'none', padding: 0 }}>
      {Array.isArray(transactions) && transactions.map(transaction => (
        <li className='transaction' key={transaction.id}>
          <p className='transaction-group'>Group: {transaction.group.name} 
            <Link to={`transaction-details/${transaction.id}`} state={{ background: location }} onClick={(() => launchTransaction(transaction.id))}>
            <Button className="launch-button" variant="outlined" color={"launch_contrast"} size="medium"><LaunchIcon /></Button>
            </Link>
          </p>
          <p>
            {transaction.transaction_type == 'Payment' ?
              <span className='sent-posted-heading'>Sent By: {transaction.user.username} </span> :
              <span className='sent-posted-heading'>Posted By: {transaction.user.username}</span>}
            <span className={transaction.transaction_type} >${transaction.amount}</span>
          </p>
          <p className='transaction-date'><span>Transaction Date: {format(new Date(transaction.transaction_date), 'MMMM dd, yyyy')} &nbsp; |  </span><span className={transaction.transaction_type}>{transaction.transaction_type}</span></p>
        </li>
      ))}
    </ul>
  );
};

export default TransactionItem;