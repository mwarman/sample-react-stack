import { Link } from 'react-router-dom';

import Icon from '../common/icons/Icon';
import HeaderNavLink from './HeaderNavLink';
import CreateTodoButton from '../todos/create/CreateTodoButton';
import Avatar from '../common/Avatar';
import DropdownMenu from '../common/menus/DropdownMenu';
import DropdownMenuLink from '../common/menus/DropdownMenuLink';
import DropdownMenuTitle from '../common/menus/DropdownMenuTitle';
import ThemeToggle from '../common/theme/ThemeToggle';

import { useAuthState } from '../../hooks/auth.hooks';

const Header = () => {
  const { data: authState, isSuccess } = useAuthState();
  const isAuthenticated = isSuccess && authState?.isAuthenticated;

  return (
    <div
      id="header"
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
      {isAuthenticated && <CreateTodoButton className="mx-6 w-24 text-base" />}
      <div className="ml-auto text-xl">
        <ThemeToggle />
      </div>
      <nav className="ml-4 flex items-center">
        <HeaderNavLink to="/auth/signin" title="Sign In" show={!isAuthenticated}>
          Sign In
        </HeaderNavLink>
      </nav>
      {isAuthenticated && (
        <DropdownMenu trigger={<Avatar className="cursor-pointer" />} position="-right-0 top-11">
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
