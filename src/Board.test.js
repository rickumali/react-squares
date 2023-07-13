import { render, screen } from '@testing-library/react';
import Board from './Board';

test('renders Board', () => {
  render(<Board rows={3} columns={3} />);
  screen.debug();
});
