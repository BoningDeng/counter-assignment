// import necessary react testing library helpers here
// import the Counter component here
import React from 'react';
import Counter from '../components/Counter.js';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

beforeEach(() =>
{
  // Render the Counter component here
    render(<Counter />);
})

test('renders counter message', () =>
{
  // Complete the unit test below based on the objective in the line above
    expect(screen.getByText('Counter')).toBeInTheDocument();
});

test('should render initial count with value of 0', () =>
{
  // Complete the unit test below based on the objective in the line above
    expect(screen.getByTestId('count')).toHaveTextContent('0');
});

test('clicking + increments the count', () =>
{
  // Complete the unit test below based on the objective in the line above
    fireEvent.click(screen.getByText('+'));
    expect(screen.getByTestId('count')).toHaveTextContent('1');
});

test('clicking - decrements the count', () =>
{
  // Complete the unit test below based on the objective in the line above
    fireEvent.click(screen.getByText('-'));
    expect(screen.getByTestId('count')).toHaveTextContent('-1');
});
