import { render, screen } from '@testing-library/react';
import CountFieldEntry from './CountFieldEntry';

test('renders CountEntryField', () => {
  render(<CountFieldEntry name="Random"/>);
  const randomEntry = screen.findByLabelText(/Random Count/i);
  randomEntry.then((r) => {
    r.toBeInTheDocument();
  })
});
