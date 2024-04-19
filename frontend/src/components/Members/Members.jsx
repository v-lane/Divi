import React from 'react';

import '../../styles/Members.scss';
import MembersList from './MembersList';

const Members = (props) => {
  const { openModal, activeGroupDetails } = props;

  return (
    <article className='members-section'>
      <h2>Members</h2>
      <MembersList openModal={openModal} activeGroupDetails={activeGroupDetails} />
    </article>
  );
};

export default Members;