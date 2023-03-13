import { render, screen } from '@testing-library/react';
import Avatar from '../Avatar';

describe('Avatar', () => {
  it('should render successfully', () => {
    const { getByTestId } = render(<Avatar name="Joe" />);

    expect(getByTestId('avatar')).toBeDefined();
  });

  it('should render null when no name passed', () => {
    const { container } = render(<Avatar />);

    expect(container.firstChild).toBeNull();
  });
});
