import React from 'react';

import '../../styles/Members.scss';
import MembersList from './MembersList';

const Members = (props) => {
  const { openModal } = props;

  return (
    <article className='members-section'>
      <h2>Members</h2>
      <MembersList openModal={openModal} />
    </article>
  );
};

export default Members;