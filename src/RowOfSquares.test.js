import { render, screen } from '@testing-library/react';
import RowOfSquares from './RowOfSquares';

test('renders Squares', () => {
  render(<RowOfSquares columns={3} />);
  screen.debug();
});
