import React from 'react';

import '../styles/OneSectionBody.scss';
import GroupsAll from '../components/GroupsAll';


const OneSectionBody = (props) => {
  const { user, userGroups, transactionData, memberTransactions, openModal } = props;

  

  return (
    <section className='one-section-body'>
      <article className='main-article'>
        <GroupsAll userGroups={userGroups} openModal={openModal}/>

      </article>
    </section>
  );
};

export default OneSectionBody;