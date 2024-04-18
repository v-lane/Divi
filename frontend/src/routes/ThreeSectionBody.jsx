import React from 'react';

import '../styles/ThreeSectionBody.scss';
import RecentTransaction from '../components/RecentTransaction';
import Groups from '../components/Groups/Groups';
import TransactionChart from '../components/TransactionChart';
import Members from '../components/Members/Members';

import { useLocation } from 'react-router-dom';


const ThreeSectionBody = (props) => {
  const { user, userGroups, transactionData, memberTransactions, openModal } = props;

  const location = useLocation();
  const checkIfGroup = location.pathname.slice(0,6)

  return (
    <section className='body-articles'>
      <div className='left'>
        <article className='top'>
          {location.pathname === '/' && <TransactionChart transactionData={transactionData} memberTransactions={memberTransactions} user={user} group={userGroups} />}
        </article>
        <article className='bottom'>
          {location.pathname === '/' && <RecentTransaction transactionData={transactionData} />}
        </article>
      </div>
      <article className='right'>
        {location.pathname === '/' && <Groups userGroups={userGroups} openModal={openModal} />}
        {checkIfGroup === '/group' && <Members openModal={openModal} />}        
      </article>
    </section>
  );
};

export default ThreeSectionBody;