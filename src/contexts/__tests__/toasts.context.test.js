import { render } from '@testing-library/react';

import { ToastsContext, ToastsContextProvider } from '../toasts.context';

describe('ToastContextProvider', () => {
  it('should render successfully', () => {
    render(<ToastsContextProvider></ToastsContextProvider>);
  });

  it('should render children', () => {
    const { getByTestId } = render(
      <ToastsContextProvider>
        <div data-testid="test-child">Toast</div>
      </ToastsContextProvider>,
    );

    expect(getByTestId('test-child')).toBeDefined();
  });

  it('should have an empty collection of toasts', () => {
    const { queryAllByTestId } = render(
      <ToastsContextProvider>
        <ToastsContext.Consumer>
          {({ state }) => {
            state.toasts.map((t) => <div data-testid="test-toast">{t.message}</div>);
          }}
        </ToastsContext.Consumer>
      </ToastsContextProvider>,
    );

    expect(queryAllByTestId('test-toast').length).toBe(0);
  });

  it('should have an empty collection of toasts', () => {
    const { queryAllByTestId } = render(
      <ToastsContextProvider>
        <ToastsContext.Consumer>
          {({ state }) => {
            state.toasts.map((t) => <div data-testid="test-toast">{t.message}</div>);
          }}
        </ToastsContext.Consumer>
      </ToastsContextProvider>,
    );

    expect(queryAllByTestId('test-toast').length).toBe(0);
  });
});
