import { NavLink, Outlet } from "react-router-dom";

import TodoNav from "../todos/TodoNav";

const TodosPage = () => {
  return (
    <div className="mx-2 mt-2">
      <h1 className="text-3xl font-bold">Todos</h1>
      <nav className="mt-3 flex">
        {[
          { to: "/", title: "Home" },
          { to: "/todos/list", title: "Todos" },
        ].map((navitem, index) => (
          <NavLink
            key={index}
            to={navitem.to}
            className="mr-2 text-blue-500 hover:text-blue-700"
          >
            {navitem.title}
          </NavLink>
        ))}
      </nav>
      <div className="mt-3 grid grid-cols-4 gap-4">
        <div className="overflow-y-scroll">
          <TodoNav />
        </div>
        <div className="col-span-3">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default TodosPage;
