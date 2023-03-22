import { render } from 'test-utils';

import DateTime from '../DateTime';

describe('DateTime', () => {
  it('should render successfully', () => {
    const { getByTestId } = render(<DateTime date={new Date().toISOString()}></DateTime>);

    expect(getByTestId('datetime')).toBeDefined();
  });

  it('should render additional props', () => {
    const { getByTitle } = render(
      <DateTime date={new Date().toISOString()} title="test"></DateTime>,
    );

    expect(getByTitle('test')).toBeDefined();
  });

  it('should be null when no date is passed', () => {
    const { queryByTestId } = render(<DateTime />);

    expect(queryByTestId('datetime')).toBeNull();
  });
});
