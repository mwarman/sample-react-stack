import { render } from 'test-utils';

import HeaderNavLink from '../HeaderNavLink';

describe('HeaderNavLink', () => {
  it('should render successfully', () => {
    const { getByTestId } = render(<HeaderNavLink to="/" title="Test" />);

    expect(getByTestId('header-nav-link')).toBeDefined();
  });
});
