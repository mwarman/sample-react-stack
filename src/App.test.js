import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('should render successfully', () => {
    const { getByTestId } = render(<App />);

    expect(getByTestId('app')).toBeDefined();
  });
});
