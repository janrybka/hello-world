import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('shows winner correctly', () => {
  let winner = App.calculateWinner([
    'X','O','O',
    'O','X',null,
    'X','O','X', 
    ]);
  if (winner !== 'X') {
    throw "błąd!";
  }
});
