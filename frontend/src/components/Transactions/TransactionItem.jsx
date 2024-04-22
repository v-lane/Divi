import React, {useState} from 'react';
import { format } from 'date-fns';
import { Link, useLocation } from "react-router-dom";
import { Button } from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';
import LaunchButton from '../LaunchButton';
import '../../styles/TransactionItem.scss';
import axios from 'axios';



const TransactionItem = (props) => {
  const { openModal, setActiveTransaction, transaction, group, user, amount } = props;
  const location = useLocation();

  const [username, setUsername] = useState(null);

  const { } = props;

  // let slice = true;
  // slice = props.slice;
  // let transactions = []
  // slice ? transactions = props.transactionData.flat().slice(0, 5) : transactions = props.transactionData.flat();

  const launchTransaction = (transactionId) => {
    setActiveTransaction(transactionId);
  };

  // if (transaction.recipient_id) {
  //   axios
  //     .get(`/api/transaction_by_id/${transaction.id}`)
  //     .then((res) => {
  //       setUsername(res.data);
  //     });
  // }

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
        {/* {transaction.recipient_id === null ?
          <> All Group Members</> :
          // <> Individual { username !== null && username.username}</>
        } */}
      </p>
      <p className='transaction-date'><span>Transaction Date: {format(new Date(transaction.transaction_date), 'MMMM dd, yyyy')} </span><span className={transaction.transaction_type}>{transaction.transaction_type}</span></p>
    </li>
  );
};

export default TransactionItem;