import React from 'react';

import '../styles/Groups.scss';
import GroupItem from './GroupItem';

import { Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


const Groups = (props) => {
  const { userGroups } = props;

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
        <Button className="new-group-button" variant="contained" color="info">Create New Group</Button>
        <Button className="groups-button" variant="contained" color="info"><ArrowForwardIcon /></Button>
      </footer>
    </article>
  );
};

export default Groups;