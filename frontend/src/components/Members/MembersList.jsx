import React from 'react';
import { Link, useLocation } from "react-router-dom";

import '../../styles/Members.scss';
import ButtonStandard from '../ButtonStandard';
import MembersListItem from './MembersListItem';



const MembersList = (props) => {
  const { openModal, activeGroupDetails } = props;
  const location = useLocation()

  return (
    <>
      <ul className='members-list'>
        {Object.keys(activeGroupDetails).length > 0 && activeGroupDetails.users.map(member => (
          <MembersListItem
            key={member.id}
            username={member.username}
          />
        ))}
      </ul>
      <footer className='members-section-footer'>
        <Link to="add_group_member" state={{ background: location }}
          onClick={(() => openModal('add_group_member'))}
        >
          <ButtonStandard buttonName={'Add New Member'} />
        </Link>
      </footer>
    </>
  );
};

export default MembersList;