import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Header from './Header';

it('renders without crashing', function() {
  shallow(<Header />);
});

it('matches snapshot', function() {
  let wrapper = shallow(<Header />);
  let serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
});
