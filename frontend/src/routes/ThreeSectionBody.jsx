import React from 'react';

import '../styles/ThreeSectionBody.scss';
import RecentTransaction from '../components/RecentTransaction';
import Groups from '../components/Groups/Groups';
import TransactionChart from '../components/TransactionChart';
import Members from '../components/Members/Members';

import { useLocation } from 'react-router-dom';


const ThreeSectionBody = (props) => {
  const { user, userGroups, transactionData, memberTransactions, openModal, activeGroup, activeGroupDetails, setActiveTransaction } = props;

  const location = useLocation();

  return (
    <section className='body-articles'>
      <div className='left'>
        <article className='top'>
          {location.pathname === '/' && <TransactionChart transactionData={transactionData} memberTransactions={memberTransactions} user={user} group={userGroups} />}
        </article>
        <article className='bottom'>
          {location.pathname === '/' && <RecentTransaction transactionData={transactionData} openModal={openModal} setActiveTransaction={setActiveTransaction}/>}
        </article>
      </div>
      <article className='right'>
        {location.pathname === '/' && <Groups userGroups={userGroups} openModal={openModal} />}
        {activeGroup > 0 && <Members openModal={openModal} activeGroupDetails={activeGroupDetails} activeGroup={activeGroup}/>}        
      </article>
    </section>
  );
};

export default ThreeSectionBody;