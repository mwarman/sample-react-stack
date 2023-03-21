import { render } from 'test-utils';

import Loading from '../Loading';

describe('Loading', () => {
  it('should render successfully', () => {
    const { getByTestId } = render(<Loading />);

    expect(getByTestId('loading')).toBeDefined();
  });

  it('should have class', () => {
    const { getByTestId } = render(<Loading className="test-class" />);

    expect(getByTestId('loading')).toHaveClass('test-class');
  });

  it('should render loading test', () => {
    const { getByText } = render(<Loading>Test message</Loading>);

    expect(getByText(/Test message/i)).toBeInTheDocument();
  });
});
