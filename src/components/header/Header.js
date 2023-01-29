import { Link, NavLink } from 'react-router-dom';

import Icon from '../common/icons/Icon';
import CreateTodoButton from '../todos/create/CreateTodoButton';
import Avatar from '../common/Avatar';

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
        to: '/todos',
        title: 'List todos',
      },
      {
        name: 'People',
        to: '/users',
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
    <div id="header" className="flex h-16 items-center px-16 shadow-lg shadow-slate-300/30">
      <div id="title" className="mr-10">
        <Link to="/" title="Todos">
          <Icon name="list-check" fixedWidth className="text-2xl text-green-700" />
          <span className="sr-only">Todos</span>
        </Link>
      </div>
      <nav className="flex items-center">
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
            <CreateTodoButton className="w-24 text-base" />
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
      <nav className="ml-auto flex items-center">
        {isAuthenticated ? (
          <>
            {menus.authenticated.right.map((link, index) => (
              <NavLink
                key={index}
                to={link.to}
                className="mr-6 text-slate-600 hover:text-black"
                title={link.title}
              >
                {link.name}
              </NavLink>
            ))}
            <Avatar className="mr-4" />
          </>
        ) : (
          menus.unauthenticated.right.map((link, index) => (
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
    </div>
  );
};

export default Header;
