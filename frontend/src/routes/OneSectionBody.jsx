import React from 'react';

import '../styles/OneSectionBody.scss';
import GroupsAll from '../components/Groups/GroupsAll';
// import NotificationsAll from '../components/NotificationsAll';
import TransactionsAll from '../components/Transactions/TransactionsAll';
import NotificationsAll from '../components/Notifications/NotificationsAll';

import { useLocation } from 'react-router-dom';



const OneSectionBody = (props) => {
  const { user, userGroups, transactionData, memberTransactions, setActiveTransaction, openModal, notifications, activeGroup, activeGroupDetails, activeGroupTransactions } = props;
  const location = useLocation();
  const usersForGroupTransactions = (activeGroupDetails && Object.keys(activeGroupDetails).length > 0 && activeGroupDetails.users)
  const groupTransactions = activeGroup ? transactionData.filter((transaction) => transaction.group_id === activeGroupDetails.id) : [];

  return (
    <section className='one-section-body'>
      <article className='main-article'>
        {location.pathname === '/all_groups' && <GroupsAll userGroups={userGroups} openModal={openModal}/>}
        {location.pathname === '/all_transactions' && <TransactionsAll transactionData={transactionData} setActiveTransaction={setActiveTransaction} activeGroupDetails={activeGroupDetails} openModal={openModal}/>}
        {location.pathname === '/all_notifications' && <NotificationsAll notifications={notifications}/>}
        {location.pathname.slice(-26) === 'dashboard/all_transactions' && <TransactionsAll setActiveTransaction={setActiveTransaction} activeGroupDetails={activeGroupDetails} transactionData={groupTransactions} openModal={openModal} users={usersForGroupTransactions} activeGroup={activeGroup}/>}

      </article>
    </section>
  );
};

export default OneSectionBody;