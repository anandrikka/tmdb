import { render, screen } from '@testing-library/react';
import Brand from '../Brand';

describe('When using Brand', () => {
  let component;

  beforeEach(() => {
    component = render(<Brand />);
  });

  // it('should have brand image defined', () => {
  //   const img = screen.findByTestId('brand-img');
  // })
});
