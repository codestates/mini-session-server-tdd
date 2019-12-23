import { configure, shallow } from 'enzyme';
import { expect } from 'chai';

import Adapter from 'enzyme-adapter-react-16';

import React from 'react';
import User from '@Components/body/User';

configure({ adapter: new Adapter() });

describe('Hello Component', () => {
  it('it should render user info after fetching.', () => {});
  it('it should render not found page if fetching fails', () => {});
});
