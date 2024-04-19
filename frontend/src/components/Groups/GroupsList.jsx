import React from 'react';
import { Link, useLocation } from "react-router-dom";

import '../../styles/Groups.scss';
import GroupListItem from './GroupsListItem';
import ButtonStandard from '../ButtonStandard';
import ButtonAll from '../ButtonAll';




const GroupsList = (props) => {
  const { userGroups, openModal } = props;
  const location = useLocation();


  return (
    <>
      <ul className='groups-list'>
        {Array.isArray(userGroups) && userGroups.map(group => (
          <GroupListItem
            key={group.id}
            group={group}
          />
        ))}
      </ul>
      <footer className='groups-section-footer'>
        <Link to="new-group" state={{ background: location }} onClick={(() => openModal('new-group'))}>
          <ButtonStandard buttonName={'Create New Group'} />
        </Link>
        <Link to='all_groups'>
          <ButtonAll />
        </Link>
      </footer>
    </>
  );
};

export default GroupsList;