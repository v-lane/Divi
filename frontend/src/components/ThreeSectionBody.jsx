import React from'react'

import '../styles/ThreeSectionBody.scss';

const ThreeSectionBody = (props) => {

  return (
    <section className='body-articles'>
      <div className='left'>
        <article className='top'>top left</article>
        <article className='bottom'>bottom left</article>
      </div>
      <article className='right'>right</article>
    </section>
  );
};

export default ThreeSectionBody;