import { Link } from 'react-router-dom';

import Icon from '../common/icons/Icon';
import HeaderNavLink from './HeaderNavLink';
import CreateTodoButton from '../todos/create/CreateTodoButton';
import Avatar from '../common/Avatar';

import { useAuthState } from '../../hooks/auth.hooks';

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
        <HeaderNavLink to="/" title="Dashboard" show={isAuthenticated}>
          Dashboard
        </HeaderNavLink>
        <HeaderNavLink to="/todos" title="Todo List" show={isAuthenticated}>
          Todos
        </HeaderNavLink>
      </nav>
      <CreateTodoButton className="mx-6 w-24 text-base" />
      <nav className="ml-auto flex items-center">
        <HeaderNavLink to="/auth/signout" title="Sign Out" show={isAuthenticated}>
          Sign Out
        </HeaderNavLink>
        <HeaderNavLink to="/auth/signin" title="Sign In" show={!isAuthenticated}>
          Sign In
        </HeaderNavLink>
      </nav>
      <Avatar />
    </div>
  );
};

export default Header;
