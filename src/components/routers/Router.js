/**
 * The `Router` React component.
 * @module components/routers/Router
 */

import { createBrowserRouter } from 'react-router-dom';

import Protected from './Protected';
import StandardLayout from '../layouts/StandardLayout';
import LandingPage from '../public/landing/LandingPage';
import DashboardPage from '../dashboard/DashboardPage';
import TodosPage from '../todos/TodosPage';
import TodoEdit from '../todos/edit/TodoEdit';
import TodoList from '../todos/list/TodoList';
import ErrorPage from '../errors/ErrorPage';
import AuthPage from '../auth/AuthPage';
import SignIn from '../auth/SignIn';
import SignUp from '../auth/SignUp';
import SignOut from '../auth/SignOut';

/**
 * Creates the application router using the DOM History API to update
 * the URL and manage the history stack.
 * @see {@link https://reactrouter.com/en/main/routers/create-browser-router}
 */
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
        path: '/todos',
        element: (
          <Protected>
            <TodosPage />
          </Protected>
        ),
        children: [
          {
            index: true,
            element: <TodoList />,
          },
          {
            path: ':todoId',
            element: <TodoEdit />,
          },
        ],
      },
    ],
  },
]);
