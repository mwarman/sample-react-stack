/**
 * Test utilities.
 * @module test/test-utils
 */

import { render } from '@testing-library/react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MemoryRouter } from 'react-router-dom';
import { ToastsContextProvider } from '../contexts/toasts.context';
import { ModalContextProvider } from '../contexts/modal.context';

/**
 * A React Query client.
 */
const queryClient = new QueryClient();

/**
 * A hierarchy of providers which wrap the component to be rendered under
 * test, i.e. the `children`.
 * @function
 * @param {Object} props The component properties.
 * @param {JSXElement} props.children The wrapped component.
 * @returns {JSXElement} The component wrapper.
 */
const AllProviders = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ToastsContextProvider>
        <MemoryRouter>
          <ModalContextProvider>{children}</ModalContextProvider>
        </MemoryRouter>
      </ToastsContextProvider>
    </QueryClientProvider>
  );
};

/**
 * A custom `render` function which configures a wrapper for rendering
 * consisting of all the application providers. Configures a `MemoryRouter`
 * and history.
 * @function
 * @param {JSXElement} ui The UI component to render.
 * @param {*} [options] Render options.
 * @param {*} [routerOptions] Router options.
 * @param {string} [routerOptions.route='/'] The current route path pushed to history.
 * @returns {Object} Render result.
 * @see {@link https://testing-library.com/docs/react-testing-library/api#render-options}
 * @see {@link https://testing-library.com/docs/react-testing-library/api#render-result}
 */
const customRender = (ui, options, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);

  return render(ui, { wrapper: AllProviders, ...options });
};

// re-export everything
export * from '@testing-library/react';

// override render function
export { customRender as render };
