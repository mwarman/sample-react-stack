import { render } from 'test-utils';

import Placeholder from '../Placeholder';

describe('Placeholder', () => {
  it('should render successfully', () => {
    const { getByTestId } = render(<Placeholder />);

    expect(getByTestId('placeholder')).toBeDefined();
  });

  it('should have class', () => {
    const { getByTestId } = render(<Placeholder className="test-class" />);

    expect(getByTestId('placeholder')).toHaveClass('test-class');
  });
});
