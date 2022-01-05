import '@testing-library/jest-dom';
import 'jsdom-global/register';
import 'regenerator-runtime/runtime'
import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import React from 'react';

global.React = React;

Enzyme.configure({
  adapter: new EnzymeAdapter()
})