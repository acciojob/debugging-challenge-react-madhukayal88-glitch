import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders form with correct JSX attributes', () => {
  render(<App />);
  
  // Verify heading renders
  const headingElement = screen.getByText(/JSX Keyword Replacement Challenge/i);
  expect(headingElement).toBeInTheDocument();

  // Verify label uses htmlFor (accessible by label text)
  const inputElement = screen.getByLabelText(/Enter Text:/i);
  expect(inputElement).toBeInTheDocument();

  // Verify class attributes converted to className
  const container = document.querySelector('.container');
  expect(container).toBeInTheDocument();

  // Verify button renders
  const buttonElement = screen.getByRole('button', { name: /submit/i });
  expect(buttonElement).toBeInTheDocument();
});
