import React from 'react';
import { shallow } from 'enzyme';

import A from 'components/A';
import Footer from '../index';

describe('<Footer />', () => {
  it('should render the copyright notice', () => {
    const renderedComponent = shallow(<Footer />);
    expect(
      renderedComponent.contains(
        <section>This project is licensed under the MIT license.</section>,
      ),
    ).toBe(true);
  });

  it('should render the credits', () => {
    const renderedComponent = shallow(<Footer />);
    expect(
      renderedComponent.contains(
        <section>
          <A href="https://github.com/ljmerza">Leonardo Merza</A>
        </section>,
      ),
    ).toBe(true);
  });
});
