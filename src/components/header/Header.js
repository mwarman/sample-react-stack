import { Link, NavLink } from "react-router-dom";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";

const Header = () => {
  return (
    <div
      id="header"
      className="flex h-20 items-center border-b border-slate-300"
    >
      <div id="title" className="mr-10 ml-2">
        <Link to="/" title="Todos">
          <CheckBadgeIcon className="inline-block h-10 w-10 text-lime-600" />
          <span className="sr-only">Todos</span>
        </Link>
      </div>
      <nav>
        <NavLink
          to="/todos/list"
          className="mr-6 text-slate-600 hover:text-black"
        >
          Todos
        </NavLink>
        <NavLink
          to="/todos/list"
          className="mr-6 text-slate-600 hover:text-black"
        >
          Something else
        </NavLink>
      </nav>
      <nav className="ml-auto">
        <NavLink
          to="/auth/signin"
          className="mr-6 text-slate-600 hover:text-black"
        >
          Sign In
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
