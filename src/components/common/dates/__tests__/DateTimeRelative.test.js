import { render } from 'test-utils';
import { DateFormat } from '../../../../utils/constants';

import DateTimeRelative from '../DateTimeRelative';

describe('DateTimeRelative', () => {
  it('should render successfully', () => {
    const { getByTestId } = render(<DateTimeRelative date={new Date().toISOString()} />);

    expect(getByTestId('datetime-relative')).toBeDefined();
  });

  it('should have class', () => {
    const { getByTestId } = render(
      <DateTimeRelative date={new Date().toISOString()} className="test-class" />,
    );

    expect(getByTestId('datetime-relative')).toHaveClass('test-class');
  });

  it('should be null when no date is passed', () => {
    const { queryByTestId } = render(<DateTimeRelative />);

    expect(queryByTestId('datetime-relative')).toBeNull();
  });

  it('should render title attribute', () => {
    const { getByTestId } = render(
      <DateTimeRelative date={new Date().toISOString()} titleFormat={DateFormat.DATETIME} />,
    );

    expect(getByTestId('datetime-relative')).toHaveAttribute('title');
  });
});
