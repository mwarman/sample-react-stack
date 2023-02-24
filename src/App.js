import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import AppTheme from './components/common/theme/AppTheme';
import { ToastsContextProvider } from './contexts/toasts.context';
import { router } from './components/routers/Router';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
    },
  },
});

const App = () => {
  return (
    <div id="app" data-testid="app">
      <QueryClientProvider client={queryClient}>
        <AppTheme>
          <ToastsContextProvider>
            <RouterProvider router={router} />
          </ToastsContextProvider>
        </AppTheme>
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      </QueryClientProvider>
    </div>
  );
};

export default App;
