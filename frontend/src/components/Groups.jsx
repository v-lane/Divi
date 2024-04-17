import React from 'react';
import { Link, useLocation } from "react-router-dom";

import '../styles/Groups.scss';
import GroupItem from './GroupItem';
import ButtonStandard from './ButtonStandard';
import ButtonAll from './ButtonAll';




const Groups = (props) => {
  const { userGroups, openModal } = props;
  const location = useLocation();


  return (
    <article className='groups-section'>
      <h2>Groups</h2>
      <ul className='groups-list'>
        {Array.isArray(userGroups) && userGroups.map(group => (
          <GroupItem
            key={group.id}
            group={group}
          />
        ))}
      </ul>
      <footer className='groups-section-footer'>
        <Link to="new-group" state={{ background: location }} onClick={(() => openModal('new-group'))}>
          <ButtonStandard buttonName={'Create New Group'} />
        </Link>
        <ButtonAll/>
      </footer>
    </article>
  );
};

export default Groups;