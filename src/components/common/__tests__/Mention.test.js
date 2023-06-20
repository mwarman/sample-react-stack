import { render } from 'test-utils';

import Mention from '../Mention';

describe('Mention', () => {
  it('should render successfully', () => {
    const { getByTestId } = render(<Mention name="John" />);

    expect(getByTestId('mention')).toBeDefined();
  });

  it('should render mention name', () => {
    const { getByText } = render(<Mention name="John" />);

    expect(getByText(/John/i)).toBeInTheDocument();
  });
});
