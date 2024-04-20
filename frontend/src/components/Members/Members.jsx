import React from 'react';

import '../../styles/Members.scss';
import MembersList from './MembersList';

const Members = (props) => {
  const { openModal, activeGroupDetails, memberTransactions } = props;

  return (
    <article className='members-section'>
      <h2>Members</h2>
      <MembersList openModal={openModal} activeGroupDetails={activeGroupDetails} memberTransactions={memberTransactions} />
    </article>
  );
};

export default Members;