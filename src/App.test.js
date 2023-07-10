import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Row and Col entry fields', () => {
  render(<App />);
  const rowEntry = screen.getByText(/Row Count/i);
  expect(rowEntry).toBeInTheDocument();
  const colEntry = screen.getByText(/Column Count/i);
  expect(colEntry).toBeInTheDocument(); 
});
