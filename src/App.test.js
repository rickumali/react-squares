import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const rowEntry = screen.getByText(/Enter Row/i);
  expect(rowEntry).toBeInTheDocument();
});
