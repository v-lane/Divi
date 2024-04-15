import React from 'react';

import '../styles/Groups.scss';
import GroupItem from './GroupItem';


const Groups = (props) => {
  const { userGroups } = props;





  return (
    <article>
      <h2>Groups</h2>
      <ul>
        {Array.isArray(userGroups) && userGroups.map(group => (
          <GroupItem
            key={group.id}
            group={group}
          />
        ))}
      </ul>

    </article>
  );
};

export default Groups;