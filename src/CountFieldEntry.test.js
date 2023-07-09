import { render, screen } from '@testing-library/react';
import CountFieldEntry from './CountFieldEntry';

test('renders Row and Col entry fields', () => {
  render(<CountFieldEntry name="Random"/>);
  const randomEntry = screen.getByLabelText(/Random Count/i);
  expect(randomEntry).toBeInTheDocument(); 
});
