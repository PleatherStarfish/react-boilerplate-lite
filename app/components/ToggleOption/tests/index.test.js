import React from 'react';
import { shallow, mount } from 'enzyme';

import ToggleOption from '../index';

describe('<ToggleOption />', () => {
  it('should render default language messages', () => {
    const renderedComponent = shallow(
      <ToggleOption value="en" message="test" />,
    );
    expect(
      renderedComponent.contains(<ToggleOption value="en" message="test" />),
    ).toBe(true);
  });

  it('should display `value`(two letter language code) when `message` is absent', () => {
    const renderedComponent = mount(<ToggleOption value="de" />);
    expect(renderedComponent.text()).toBe('de');
  });
});
