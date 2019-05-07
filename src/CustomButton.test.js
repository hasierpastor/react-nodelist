import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import CustomButton from './CustomButton';

it('renders without crashing', function() {
  shallow(<CustomButton />);
});

it('matches snapshot', function() {
  let wrapper = shallow(<CustomButton />);
  let serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
});
