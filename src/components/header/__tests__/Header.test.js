import { render, screen } from 'test-utils';

import * as authHooks from '../../../hooks/auth.hooks';
import Header from '../Header';
import { authenticatedUser1, notAuthenticated } from '../../../__fixtures__/authstate.fixtures';
import { account1 } from '../../../__fixtures__/accounts.fixtures';

const useAuthStateSpy = jest.spyOn(authHooks, 'useAuthState');
const useGetAccountSpy = jest.spyOn(authHooks, 'useGetAccount');

describe('Header', () => {
  beforeEach(() => {
    useAuthStateSpy.mockReturnValue({ data: notAuthenticated, isSuccess: true });
    useGetAccountSpy.mockReturnValue({});
  });

  afterEach(() => {
    useAuthStateSpy.mockClear();
    useGetAccountSpy.mockClear();
  });

  it('should render successfully', () => {
    render(<Header />);

    expect(screen.getByTestId('header')).toBeDefined();
  });

  it('should render Sign In link to unauthenticated user', () => {
    render(<Header />);

    expect(screen.getByText(/Sign In/i)).toBeInTheDocument();
  });

  it('should render Sign Out link to authenticated user', () => {
    useAuthStateSpy.mockReturnValueOnce({
      data: authenticatedUser1,
      isSuccess: true,
    });
    useGetAccountSpy.mockReturnValueOnce({ data: account1 });

    render(<Header />);

    expect(screen.getByText(/Sign Out/i)).toBeInTheDocument();
  });
});
