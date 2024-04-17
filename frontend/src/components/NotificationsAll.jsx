import React, { useState } from 'react';

import '../styles/NotificationsAll.scss';
// import GroupsAllList from './GroupsAllList';
import NotificationsAllSidebar from './NotificationsAllSidebar';
import NotificationsMain from './NotificationsMain';
import ButtonStandard from './ButtonStandard';

const NotificationsAll = (props) => {

  return (
    <>
      <h1>All Notifications</h1>
      <section className='notifications-body'>
        <NotificationsAllSidebar />
        <NotificationsMain />
      </section>
      <footer className='notifications-footer'>
        <ButtonStandard buttonName={'Archive'} />
      </footer>
    </>
  );
};

export default NotificationsAll;