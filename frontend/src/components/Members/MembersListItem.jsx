import React from 'react';

const MembersListItem = ({username}) => {

  return (
    <li className='member-item'>
      <header>
        {/* <h3>{member.name}</h3> */}
        <h3>{username}</h3>
      </header>
      <ul>
        <li><span>Owes: </span>$$</li>
        <li><span>Expects: </span>$$</li>
      </ul>
    </li>
  );
};

export default MembersListItem;