import React from 'react';
import App from './App';
import 'react-native';
import Login from './app/components/Login.js';
import Signup from './app/components/Signup.js';
import Gallery from './app/components/Gallery.js';
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

it('Signup renders correctly', () => {
  const tree = renderer.create(
    <Signup />
    ).toJSON();
  expect(tree).toBeTruthy();
});

it('Gallery renders correctly', () => {
  const tree = renderer.create(
    <Gallery />
    ).toJSON();
  expect(tree).toBeTruthy();
});