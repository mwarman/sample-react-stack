import { Link, NavLink } from 'react-router-dom';
import { CheckBadgeIcon } from '@heroicons/react/24/solid';

import CreateTodoButton from '../todos/CreateTodoButton';

import { useAuthState } from '../../hooks/auth.hooks';

const menus = {
  unauthenticated: {
    left: [],
    right: [
      {
        name: 'Sign In',
        to: '/auth/signin',
        title: 'Sign In',
      },
    ],
  },
  authenticated: {
    left: [
      {
        name: 'Todos',
        to: '/todos/list',
        title: 'List todos',
      },
      {
        name: 'People',
        to: '/users/list',
        title: 'List people',
      },
    ],
    right: [
      {
        name: 'Sign Out',
        to: '/auth/signout',
        title: 'Sign Out',
      },
    ],
  },
};

const Header = () => {
  const { data: authState, isSuccess } = useAuthState();
  const isAuthenticated = isSuccess && authState?.isAuthenticated;

  return (
    <div id="header" className="flex h-16 items-center border-b border-slate-300">
      <div id="title" className="mr-10 ml-2">
        <Link to="/" title="Todos">
          <CheckBadgeIcon className="inline-block h-10 w-10 text-lime-600" />
          <span className="sr-only">Todos</span>
        </Link>
      </div>
      <nav>
        {isAuthenticated ? (
          <>
            {menus.authenticated.left.map((link, index) => (
              <NavLink
                key={index}
                to={link.to}
                className="mr-6 text-slate-600 hover:text-black"
                title={link.title}
              >
                {link.name}
              </NavLink>
            ))}
            <CreateTodoButton className="text-base" />
          </>
        ) : (
          menus.unauthenticated.left.map((link, index) => (
            <NavLink
              key={index}
              to={link.to}
              className="mr-6 text-slate-600 hover:text-black"
              title={link.title}
            >
              {link.name}
            </NavLink>
          ))
        )}
      </nav>
      <nav className="ml-auto">
        {isAuthenticated
          ? menus.authenticated.right.map((link, index) => (
              <NavLink
                key={index}
                to={link.to}
                className="mr-6 text-slate-600 hover:text-black"
                title={link.title}
              >
                {link.name}
              </NavLink>
            ))
          : menus.unauthenticated.right.map((link, index) => (
              <NavLink
                key={index}
                to={link.to}
                className="mr-6 text-slate-600 hover:text-black"
                title={link.title}
              >
                {link.name}
              </NavLink>
            ))}
      </nav>
    </div>
  );
};

export default Header;
