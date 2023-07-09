import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Row and Col entry fields', () => {
  render(<App />);
  const rowEntry = screen.getByText(/Enter Row/i);
  expect(rowEntry).toBeInTheDocument();
  const colEntry = screen.getByText(/Enter Col/i);
  expect(colEntry).toBeInTheDocument(); 
});
