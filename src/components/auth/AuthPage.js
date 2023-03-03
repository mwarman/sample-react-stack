/**
 * The `AuthPage` React component.
 * @module components/auth/AuthPage
 */

import { Outlet } from 'react-router-dom';

/**
 * The `AuthPage` component renders the page layout for the authentication
 * family of routes.
 * @function
 * @returns {JSXElement} JSX
 */
const AuthPage = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="mt-20 w-[400px]">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthPage;
