import React from 'react';

import '../../styles/Members.scss';
import MembersList from './MembersList';

const Members = (props) => {
  const { openModal, activeGroupDetails, memberTransactions, allMemberTransactions } = props;

  return (
    <article className='members-section'>
      <h2>Members</h2>
      <MembersList openModal={openModal} activeGroupDetails={activeGroupDetails} memberTransactions={memberTransactions} allMemberTransactions={allMemberTransactions}/>
    </article>
  );
};

export default Members;