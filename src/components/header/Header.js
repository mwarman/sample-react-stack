/**
 * The `Header` React component.
 * @module components/header/Header
 */

import { Link } from 'react-router-dom';

import Icon from '../common/icons/Icon';
import HeaderNavLink from './HeaderNavLink';
import CreateTodoButton from '../todos/create/CreateTodoButton';
import Avatar from '../common/Avatar';
import DropdownMenu from '../common/menus/DropdownMenu';
import DropdownMenuLink from '../common/menus/DropdownMenuLink';
import DropdownMenuTitle from '../common/menus/DropdownMenuTitle';
import ThemeToggle from '../common/theme/ThemeToggle';

import { useAuthState, useGetAccount } from '../../hooks/auth.hooks';

/**
 * The `Header` component renders the top toolbar menu within the application.
 * @function
 * @returns {JSXElement} JSX
 */
const Header = () => {
  const { data: authState, isSuccess: isSuccessAuthState } = useAuthState();
  const { data: account } = useGetAccount(authState?.id, {
    enabled: !!authState?.id,
  });
  const isAuthenticated = isSuccessAuthState && authState?.isAuthenticated;

  return (
    <div
      id="header"
      data-testid="header"
      className="flex h-16 items-center px-16 shadow-lg shadow-slate-light/30 dark:shadow-slate-700/30"
    >
      <div id="title" className="mr-10">
        <Link to="/" title="Todos">
          <Icon name="list-check" fixedWidth className="text-2xl text-green-dark/70" />
          <span className="sr-only">Todos</span>
        </Link>
      </div>
      <nav className="flex items-center">
        <HeaderNavLink to="/dashboard" title="Dashboard" show={isAuthenticated}>
          Dashboard
        </HeaderNavLink>
        <HeaderNavLink to="/todos" title="Todo List" show={isAuthenticated}>
          Todos
        </HeaderNavLink>
      </nav>
      {isAuthenticated && <CreateTodoButton size="sm" className="mx-6 w-24 text-base" />}
      <div className="ml-auto text-xl">
        <ThemeToggle />
      </div>
      <nav className="ml-4 flex items-center">
        <HeaderNavLink to="/auth/signin" title="Sign In" show={!isAuthenticated}>
          Sign In
        </HeaderNavLink>
      </nav>
      {isAuthenticated && (
        <DropdownMenu
          trigger={
            <Avatar
              className="cursor-pointer"
              name={`${account?.firstName || ''} ${account?.lastName || ''}`}
            />
          }
          position="-right-0 top-11"
        >
          <DropdownMenuTitle>Account</DropdownMenuTitle>
          <DropdownMenuLink to="/auth/signout" title="Sign Out">
            Sign Out
          </DropdownMenuLink>
        </DropdownMenu>
      )}
    </div>
  );
};

export default Header;
