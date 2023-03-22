import { render } from 'test-utils';

import LoadingButton from '../LoadingButton';

describe('LoadingButton', () => {
  it('should render successfully', () => {
    const { getByTestId } = render(<LoadingButton>Test</LoadingButton>);

    expect(getByTestId('button')).toBeDefined();
  });

  it('should have class', () => {
    const { getByTestId } = render(<LoadingButton className="test-class">Test</LoadingButton>);

    expect(getByTestId('button')).toHaveClass('test-class');
  });

  it('should pass props to button', () => {
    const { getByTitle } = render(<LoadingButton title="Test">label</LoadingButton>);

    expect(getByTitle('Test')).toBeDefined();
  });

  it('should render spinner when in loading state', () => {
    const { queryByTestId } = render(<LoadingButton isLoading={true}>Test</LoadingButton>);

    expect(queryByTestId('loading')).toBeDefined();
  });

  it('should not render spinner when not in loading state', () => {
    const { queryByTestId } = render(<LoadingButton isLoading={false}>Test</LoadingButton>);

    expect(queryByTestId('loading')).toBeNull();
  });
});
