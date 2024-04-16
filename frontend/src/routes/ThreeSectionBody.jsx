import React from 'react';

import '../styles/ThreeSectionBody.scss';
import RecentTransaction from '../components/RecentTransaction';
import Groups from '../components/Groups';
import TransactionChart from '../components/TransactionChart';

const ThreeSectionBody = (props) => {
  const { userGroups } = props;

  

  return (
    <section className='body-articles'>
      <div className='left'>
        <article className='top'></article>
        <article className='bottom'><RecentTransaction transactionData={props.transactionData}/></article>
      </div>
      <article className='right'>
        <Groups userGroups={userGroups}/>
      </article>
    </section>
  );
};

export default ThreeSectionBody;