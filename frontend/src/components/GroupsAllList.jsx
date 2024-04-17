import React from 'react';
import { Link, useLocation } from "react-router-dom";

import '../styles/GroupsAll.scss';
import GroupsAllListItem from './GroupsAllListItem';
import ButtonStandard from './ButtonStandard';


const GroupsAllList = (props) => {
  const { userGroups, openModal } = props;
  const location = useLocation();

  return (
    <>
      <section className='table-headers'>
        <ul>
          <li>Group Details</li>
          <li>Group Owner</li>
          <li>Group Member(s)</li>
          <li>Link to Group Dashboard</li>
        </ul>
      </section>

      <section className='all-groups'>
        {userGroups.map(userGroup => (
          <GroupsAllListItem userGroup={userGroup} key={userGroup.id} />
        ))}
      </section>
      

      <footer className='all-groups-section-footer'>
        <Link to="new-group" state={{ background: location }} onClick={(() => openModal('new-group'))}>
          <ButtonStandard buttonName={'Create New Group'} />
        </Link>
      </footer>
    </>
  );
};

export default GroupsAllList;