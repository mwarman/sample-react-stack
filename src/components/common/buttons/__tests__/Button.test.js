import { render } from 'test-utils';

import Button from '../Button';

describe('Button', () => {
  it('should render successfully', () => {
    const { getByTestId } = render(<Button>Test</Button>);

    expect(getByTestId('button')).toBeDefined();
  });

  it('should render button text', () => {
    const { getByText } = render(<Button>Test</Button>);

    expect(getByText(/Test/i)).toBeInTheDocument();
  });

  it('should have class', () => {
    const { getByTestId } = render(<Button className="test-class">Test</Button>);

    expect(getByTestId('button')).toHaveClass('test-class');
  });

  it('should use default variant', () => {
    const { getByTestId } = render(<Button>Test</Button>);

    expect(getByTestId('button')).toHaveClass('enabled:hover:bg-slate/20');
  });

  it('should use primary variant', () => {
    const { getByTestId } = render(<Button variant="primary">Test</Button>);

    expect(getByTestId('button')).toHaveClass('bg-blue');
  });

  it('should use medium size', () => {
    const { getByTestId } = render(<Button>Test</Button>);

    expect(getByTestId('button')).toHaveClass('px-3');
  });

  it('should use small size', () => {
    const { getByTestId } = render(<Button size="sm">Test</Button>);

    expect(getByTestId('button')).toHaveClass('px-2');
  });

  it('should use large size', () => {
    const { getByTestId } = render(<Button size="lg">Test</Button>);

    expect(getByTestId('button')).toHaveClass('px-4');
  });
});
