import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// need to add test for testing returned API call 

describe('App', () => {
  test('renders App component', () => {
    render(<App />);
  });
  test('page title renders', () => {
    render(<App />);
    expect(screen.getByText('Book Finder')).toBeInTheDocument();
  })
  test('Search input renders', () => {
    render(<App />);
    expect(screen.getByPlaceholderText('Enter a book title here ...')).toBeInTheDocument();
  })
  test('Submit button renders', () => {
    render(<App />);
    expect(screen.getByRole('button'));
  })
})

