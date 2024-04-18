import React from 'react';

import '../styles/OneSectionBody.scss';
import GroupsAll from '../components/GroupsAll';
// import NotificationsAll from '../components/NotificationsAll';
import TransactionsAll from '../components/TransactionsAll';

import { useLocation } from 'react-router-dom';


const OneSectionBody = (props) => {
  const { user, userGroups, transactionData, memberTransactions, openModal } = props;

  const location = useLocation();


  return (
    <section className='one-section-body'>
      <article className='main-article'>
        {location.pathname === '/all_groups' && <GroupsAll userGroups={userGroups} openModal={openModal}/>}
        {/* {location.pathname === '/all_notifications' && <NotificationsAll />} */}
        {location.pathname === '/all_transactions' && <TransactionsAll user={user} transactionData={transactionData} openModal={openModal} />}

      </article>
    </section>
  );
};

export default OneSectionBody;