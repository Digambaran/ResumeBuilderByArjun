import React from 'react';
import ReactDOM from 'react-dom';
import AppOne from './AppOne';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AppOne />, div);
});
