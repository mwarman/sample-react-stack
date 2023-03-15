import { render } from '@testing-library/react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MemoryRouter } from 'react-router-dom';
import { ToastsContextProvider } from '../contexts/toasts.context';
import { ModalContextProvider } from '../contexts/modal.context';

const queryClient = new QueryClient();

const WithAllProviders = ({ children }) => {
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

export const renderWithProviders = (ui, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);

  return render(ui, { wrapper: WithAllProviders });
};
