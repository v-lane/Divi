import React from 'react';

import '../styles/OneSectionBody.scss';


const OneSectionBody = (props) => {
  const { user, userGroups, transactionData, memberTransactions, openModal } = props;

  

  return (
    <section className='one-section-body'>
      <article className='main-article'>
      <h1>Hi</h1>
      <p>Paragraph</p>

      </article>
    </section>
  );
};

export default OneSectionBody;