import React from 'react';

import '../styles/OneSectionBody.scss';
import GroupsAll from '../components/Groups/GroupsAll';
// import NotificationsAll from '../components/NotificationsAll';
import TransactionsAll from '../components/TransactionsAll';
import NotificationsAll from '../components/Notifications/NotificationsAll';

import { useLocation } from 'react-router-dom';



const OneSectionBody = (props) => {
  const { user, userGroups, transactionData, memberTransactions, openModal, notifications } = props;

  const location = useLocation();


  return (
    <section className='one-section-body'>
      <article className='main-article'>
        {location.pathname === '/all_groups' && <GroupsAll userGroups={userGroups} openModal={openModal}/>}
        {location.pathname === '/all_transactions' && <TransactionsAll transactionData={transactionData} openModal={openModal}/>}
        {location.pathname === '/all_notifications' && <NotificationsAll notifications={notifications}/>}

      </article>
    </section>
  );
};

export default OneSectionBody;