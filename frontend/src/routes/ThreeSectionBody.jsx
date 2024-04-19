import React from 'react';

import '../styles/ThreeSectionBody.scss';
import RecentTransaction from '../components/RecentTransaction';
import Groups from '../components/Groups/Groups';
import TransactionChart from '../components/TransactionChart';
import GroupTransactionChart from '../components/GroupTransactionChart'
import Members from '../components/Members/Members';

import { useLocation } from 'react-router-dom';


const ThreeSectionBody = (props) => {
  const { user, userGroups, transactionData, memberTransactions, openModal, activeGroup, activeGroupDetails, activeGroupTransactions, setActiveTransaction } = props;

  const location = useLocation();

  const recentTransactionData = (transactionData && transactionData.flat().slice(0, 5))
  const recentGroupTransactions = (activeGroupTransactions && activeGroupTransactions.slice(-5))


  return (
    <section className='body-articles'>
      <div className='left'>
        <article className='top'>
          {location.pathname === '/' && <TransactionChart transactionData={transactionData} memberTransactions={memberTransactions} user={user} group={userGroups} />}
          {activeGroup > 0 && <GroupTransactionChart transactionData={transactionData} memberTransactions={memberTransactions} user={user} group={userGroups} activeGroup={activeGroup} activeGroupDetails={activeGroupDetails}/>}
        </article>
        <article className='bottom'>
          {location.pathname === '/' && <RecentTransaction recentTransactionData={recentTransactionData} openModal={openModal} setActiveTransaction={setActiveTransaction}/>}
          {activeGroup > 0 && <RecentTransaction openModal={openModal} recentTransactionData={recentGroupTransactions} />}        
        </article>
      </div>
      <article className='right'>
        {location.pathname === '/' && <Groups userGroups={userGroups} openModal={openModal} />}
        {activeGroup > 0 && <Members openModal={openModal} activeGroupDetails={activeGroupDetails} />}        
      </article>
    </section>
  );
};

export default ThreeSectionBody;
