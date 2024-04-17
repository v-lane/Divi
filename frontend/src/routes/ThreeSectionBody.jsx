import React from 'react';

import '../styles/ThreeSectionBody.scss';
import RecentTransaction from '../components/RecentTransaction';
import Groups from '../components/Groups';
import TransactionChart from '../components/TransactionChart';

const ThreeSectionBody = (props) => {
  const { user, userGroups, transactionData, memberTransactions } = props;
  const { userGroups, openModal } = props;

  

  return (
    <section className='body-articles'>
      <div className='left'>
        <article className='top'>
            <TransactionChart transactionData={transactionData} memberTransactions={memberTransactions} user={user} group={userGroups}/>
        </article>
        <article className='bottom'><RecentTransaction transactionData={transactionData} /></article>
      </div>
      <article className='right'>
        <Groups userGroups={userGroups} openModal={openModal}/>
      </article>
    </section>
  );
};

export default ThreeSectionBody;