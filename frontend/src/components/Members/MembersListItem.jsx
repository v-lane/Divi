import React from 'react';
import MembersListItemBullet from './MembersListItemBullet';

const MembersListItem = ({ member, activeGroupDetails, memberTransactions, allMemberTransactions }) => {

  const otherMembers = activeGroupDetails.users.filter((user) => user.id !== member.id);
  const membersAndTotals = [];

  for (const user of otherMembers) {

    let balance = 0;
    allMemberTransactions.filter((transaction) => {
      if (transaction.group_id === activeGroupDetails.id) {
        if (transaction.owner_id === member.id && transaction.recipient_id === user.id) {
          balance += transaction.amount;
        }
        if (transaction.owner_id === user.id && transaction.recipient_id === member.id) {
          balance -= transaction.amount;
        }
      }
    });

    const stats = { user, balance };
    membersAndTotals.push(stats);
  }

  return (
    <li className='member-item'>
      <header>
        <h3>{member.username}</h3>
      </header>
      <ul>
        {membersAndTotals.map((otherMember) => (
          <MembersListItemBullet key={otherMember.user.id} user={otherMember.user} balance={otherMember.balance}/>
        ))}
        <br />
        <li><strong>E-transfer: </strong>{member.email}</li>
      </ul>
    </li>
  );
};

export default MembersListItem;