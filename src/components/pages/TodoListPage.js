import { NavLink } from "react-router-dom";

import { useGetTodos } from "../../hooks/todos.hooks";
import TodoList from "../todos/TodoList";

const TodoListPage = () => {
  const { data: todos, status } = useGetTodos();

  return (
    <div className="mx-2 mt-2">
      <h1 className="text-3xl font-bold">Todo List</h1>
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
      <div className="mt-3">
        <TodoList todos={todos}></TodoList>
      </div>
    </div>
  );
};

export default TodoListPage;
