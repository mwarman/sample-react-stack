import { render } from 'test-utils';

import Badge from '../Badge';

describe('Badge', () => {
  it('should render successfully', () => {
    const { getByTestId } = render(<Badge>Test</Badge>);

    expect(getByTestId('badge')).toBeDefined();
  });

  it('should render badge text', () => {
    const { getByText } = render(<Badge>Test</Badge>);

    expect(getByText(/Test/i)).toBeInTheDocument();
  });

  it('should have class', () => {
    const { getByTestId } = render(<Badge className="test-class">Test</Badge>);

    expect(getByTestId('badge')).toHaveClass('test-class');
  });

  it('should use default variant', () => {
    const { getByTestId } = render(<Badge>Test</Badge>);

    expect(getByTestId('badge')).toHaveClass('bg-slate/30');
  });

  it('should use danger variant', () => {
    const { getByTestId } = render(<Badge variant="danger">Test</Badge>);

    expect(getByTestId('badge')).toHaveClass('bg-red/30');
  });

  it('should use success variant', () => {
    const { getByTestId } = render(<Badge variant="success">Test</Badge>);

    expect(getByTestId('badge')).toHaveClass('bg-green/30');
  });

  it('should use warning variant', () => {
    const { getByTestId } = render(<Badge variant="warning">Test</Badge>);

    expect(getByTestId('badge')).toHaveClass('bg-amber-light/30');
  });

  it('should use primary variant', () => {
    const { getByTestId } = render(<Badge variant="primary">Test</Badge>);

    expect(getByTestId('badge')).toHaveClass('bg-blue/30');
  });
});
