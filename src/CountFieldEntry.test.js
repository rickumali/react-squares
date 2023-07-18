import { render, screen } from '@testing-library/react';
import CountFieldEntry from './CountFieldEntry';

test('renders CountEntryField', () => {
  render(<CountFieldEntry name="Random" value="3" />);
  const randomEntry = screen.findByLabelText(/Random Count/i);
  screen.debug();
  randomEntry.then((r) => {
    r.toBeInTheDocument();
  })
});
