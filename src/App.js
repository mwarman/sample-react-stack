import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { ToastsContextProvider } from './contexts/toasts.context';
import StandardLayout from './components/layouts/StandardLayout';
import LandingPage from './components/pages/LandingPage';
import TodoEditPage from './components/pages/TodoEditPage';
import TodoListPage from './components/pages/TodoListPage';
import TodosPage from './components/pages/TodosPage';
import Todo from './components/todos/Todo';
import ErrorPage from './components/pages/ErrorPage';
import AuthPage from './components/pages/AuthPage';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import SignOut from './components/auth/SignOut';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
    },
  },
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <StandardLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: '/auth',
        element: <AuthPage />,
        children: [
          {
            path: 'signup',
            element: <SignUp />,
          },
          {
            path: 'signin',
            element: <SignIn />,
          },
          {
            path: 'signout',
            element: <SignOut />,
          },
        ],
      },
      {
        path: '/todos/:todoId/edit',
        element: <TodoEditPage />,
      },
      {
        path: '/todos/list',
        element: <TodoListPage />,
      },
      {
        path: '/todos',
        element: <TodosPage />,
        children: [
          {
            path: ':todoId',
            element: <Todo />,
          },
        ],
      },
    ],
  },
]);

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
