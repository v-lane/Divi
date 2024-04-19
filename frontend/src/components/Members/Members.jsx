import React from 'react';

import '../../styles/Members.scss';
import MembersList from './MembersList';

import groupMembersData from '../../mock_data/groupMembersData'

const Members = (props) => {
  const { openModal, activeGroupDetails, activeGroup } = props;

  return (
    <article className='members-section'>
      <h2>Members</h2>
      <MembersList openModal={openModal} groupMembersData={groupMembersData.users} activeGroupDetails={activeGroupDetails} />
    </article>
  );
};

export default Members;