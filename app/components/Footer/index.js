import React from 'react';

import A from 'components/A';
import Wrapper from './Wrapper';

function Footer() {
  return (
    <Wrapper>
      <section>This project is licensed under the MIT license.</section>
      <section>
        <A href="https://github.com/ljmerza">Leonardo Merza</A>
      </section>
    </Wrapper>
  );
}

export default Footer;
