import React from 'react';

import '../styles/ThreeSectionBody.scss';
import RecentTransaction from '../components/RecentTransaction';
import Groups from '../components/Groups';

const ThreeSectionBody = (props) => {
  const { userGroups } = props;

  return (
    <section className='body-articles'>
      <div className='left'>
        <article className='top'>top left</article>
        <article className='bottom'><RecentTransaction /></article>
      </div>
      <article className='right'>
        <Groups userGroups={userGroups}/>
      </article>
    </section>
  );
};

export default ThreeSectionBody;