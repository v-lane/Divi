import React from 'react';

import '../styles/ThreeSectionBody.scss';
import RecentTransaction from '../components/RecentTransaction';
import Groups from '../components/Groups';

const ThreeSectionBody = (props) => {
  const { userGroups, openModal } = props;

  

  return (
    <section className='body-articles'>
      <div className='left'>
        <article className='top'>top left</article>
        <article className='bottom'><RecentTransaction transactionData={props.transactionData}/></article>
      </div>
      <article className='right'>
        <Groups userGroups={userGroups} openModal={openModal}/>
      </article>
    </section>
  );
};

export default ThreeSectionBody;