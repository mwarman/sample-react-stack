import { createBrowserRouter } from 'react-router-dom';

import Protected from './Protected';
import StandardLayout from '../layouts/StandardLayout';
import LandingPage from '../pages/LandingPage';
import DashboardPage from '../dashboard/DashboardPage';
import TodoEditPage from '../pages/TodoEditPage';
import TodoListPage from '../pages/TodoListPage';
import TodosPage from '../pages/TodosPage';
import Todo from '../todos/Todo';
import ErrorPage from '../pages/ErrorPage';
import AuthPage from '../pages/AuthPage';
import SignIn from '../auth/SignIn';
import SignUp from '../auth/SignUp';
import SignOut from '../auth/SignOut';

export const router = createBrowserRouter([
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
        path: '/dashboard',
        element: (
          <Protected>
            <DashboardPage />
          </Protected>
        ),
      },
      {
        path: '/todos/:todoId/edit',
        element: (
          <Protected>
            <TodoEditPage />
          </Protected>
        ),
      },
      {
        path: '/todos/list',
        element: (
          <Protected>
            <TodoListPage />
          </Protected>
        ),
      },
      {
        path: '/todos',
        element: (
          <Protected>
            <TodosPage />
          </Protected>
        ),
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
