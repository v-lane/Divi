import React from 'react';

const MembersListItem = ({member, activeGroupDetails, memberTransactions}) => {

  const otherMembers = activeGroupDetails.users.filter((user) => user.id !== member.id)
  const membersAndTotals = [];

  for (const user of otherMembers) {
    
    let balance = 0;
    memberTransactions.filter((transaction) => {
      if (transaction.owner_id === member.id && transaction.recipient_id === user.id) {
        balance += transaction.amount
      }
      if (transaction.owner_id === user.id && transaction.recipient_id === member.id) {
          balance -= transaction.amount
      }
    })
    
    const stats = {user, balance}
    membersAndTotals.push(stats)
  }

  console.log(member, membersAndTotals)

  return (
    <li className='member-item'>
      <header>
        {/* <h3>{member.name}</h3> */}
        <h3>{member.username}</h3>
      </header>
      <ul>
        {membersAndTotals.map((otherMember) => (
          otherMember.balance > 0 ? 
            <li key={otherMember.user.id} className='member-balance-line' >Is owed <span className='owed' >${otherMember.balance}</span> by <span className='member-with-balance'>{otherMember.user.username}</span></li> : 
            <li key={otherMember.user.id} className='member-balance-line' >Owes {otherMember.balance === 0 ?<span className='neutral'>$0</span> : <span className='owes' >${otherMember.balance * -1}</span>} to <span className='member-with-balance'>{otherMember.user.username}</span></li> 
        ))}
        <br/>
        <li>Email: {member.email}</li>
      </ul>
    </li>
  );
};

export default MembersListItem;