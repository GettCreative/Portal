import React from 'react';
import App from './App';
import 'react-native';
import Login from './app/components/Login.js';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(<App />).toJSON();
  expect(rendered).toBeTruthy();
});

it('Login renders correctly', () => {
  const tree = renderer.create(
    <Login />
    ).toJSON();
  expect(tree).toBeTruthy();
});