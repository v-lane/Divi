import React from 'react';

import '../styles/ThreeSectionBody.scss';
import RecentTransaction from '../components/RecentTransaction';

const ThreeSectionBody = (props) => {

  

  return (
    <section className='body-articles'>
      <div className='left'>
        <article className='top'>top left</article>
        <article className='bottom'><RecentTransaction transactionData={props.transactionData}/></article>
      </div>
      <article className='right'>right</article>
    </section>
  );
};

export default ThreeSectionBody;