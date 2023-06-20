import { render } from 'test-utils';

import Alert from '../Alert';

describe('Alert', () => {
  it('should render successfully', () => {
    const { getByTestId } = render(<Alert>Test message</Alert>);

    expect(getByTestId('alert')).toBeDefined();
  });

  it('should render alert text', () => {
    const { getByText } = render(<Alert>Test message</Alert>);

    expect(getByText(/Test message/i)).toBeInTheDocument();
  });

  it('should have class', () => {
    const { getByTestId } = render(<Alert className="test-class">Test message</Alert>);

    expect(getByTestId('alert')).toHaveClass('test-class');
  });

  it('should use default variant', () => {
    const { getByTestId } = render(<Alert>Test message</Alert>);

    expect(getByTestId('alert')).toHaveClass('bg-slate/30');
  });

  it('should use primary variant', () => {
    const { getByTestId } = render(<Alert variant="primary">Test message</Alert>);

    expect(getByTestId('alert')).toHaveClass('bg-blue/30 text-blue-dark');
  });

  it('should use warning variant', () => {
    const { getByTestId } = render(<Alert variant="warning">Test message</Alert>);

    expect(getByTestId('alert')).toHaveClass('bg-amber-light/30 text-amber-dark');
  });

  it('should use error variant', () => {
    const { getByTestId } = render(<Alert variant="error">Test message</Alert>);

    expect(getByTestId('alert')).toHaveClass('bg-red/30 text-red-dark');
  });
});
