import React from 'react';

import '../styles/ThreeSectionBody.scss';
import RecentTransaction from '../components/Transactions/RecentTransaction';
import Groups from '../components/Groups/Groups';
import TransactionChart from '../components/charts/TransactionChart';
import GroupTransactionChart from '../components/charts/GroupTransactionChart'
import Members from '../components/Members/Members';

import { useLocation } from 'react-router-dom';


const ThreeSectionBody = (props) => {
  const { user, userGroups, transactionData, memberTransactions, openModal, activeGroup, activeGroupDetails, setActiveTransaction, allMemberTransactions } = props;

  const location = useLocation();

  const recentTransactionData = (transactionData && transactionData.flat().slice(0, 5))

  const groupTransactions = activeGroupDetails.id ? transactionData.filter((transaction) => transaction.group_id === activeGroupDetails.id) : [];
  const recentGroupTransactions = (groupTransactions && groupTransactions.slice(0, 5))

  return (
    <section className='body-articles'>
      <div className='left'>
        <article className='top'>
          {location.pathname === '/' && <TransactionChart transactionData={transactionData} memberTransactions={memberTransactions} allMemberTransactions={allMemberTransactions} user={user} group={userGroups} />}
          {activeGroup > 0 && <GroupTransactionChart transactionData={transactionData} memberTransactions={memberTransactions} allMemberTransactions={allMemberTransactions} user={user} group={userGroups} activeGroup={activeGroup} activeGroupDetails={activeGroupDetails}/>}
        </article>
        <article className='bottom'>
          {location.pathname === '/' && <RecentTransaction recentTransactionData={recentTransactionData} openModal={openModal} setActiveTransaction={setActiveTransaction} activeGroupDetails={activeGroupDetails}/>}
          {activeGroup > 0 && <RecentTransaction openModal={openModal} recentTransactionData={recentGroupTransactions} setActiveTransaction={setActiveTransaction} activeGroupDetails={activeGroupDetails}/>}        
        </article>
      </div>
      <article className='right'>
        {location.pathname === '/' && <Groups userGroups={userGroups} openModal={openModal} />}
        {activeGroup > 0 && <Members openModal={openModal} activeGroupDetails={activeGroupDetails} memberTransactions={memberTransactions} allMemberTransactions={allMemberTransactions} user={user} />}        
      </article>
    </section>
  );
};

export default ThreeSectionBody;
