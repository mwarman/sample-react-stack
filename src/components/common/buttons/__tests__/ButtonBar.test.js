import { render } from 'test-utils';

import ButtonBar from '../ButtonBar';

describe('ButtonBar', () => {
  it('should render successfully', () => {
    const { getByTestId } = render(<ButtonBar></ButtonBar>);

    expect(getByTestId('button-bar')).toBeDefined();
  });

  it('should render children', () => {
    const { getByText } = render(<ButtonBar>children</ButtonBar>);

    expect(getByText(/children/i)).toBeInTheDocument();
  });

  it('should have class', () => {
    const { getByTestId } = render(<ButtonBar className="test-class">children</ButtonBar>);

    expect(getByTestId('button-bar')).toHaveClass('test-class');
  });
});
