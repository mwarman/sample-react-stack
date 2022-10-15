import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

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
    <QueryClientProvider client={queryClient}>
      <ToastsContextProvider>
        <RouterProvider router={router} />
      </ToastsContextProvider>
    </QueryClientProvider>
  );
};

export default App;
