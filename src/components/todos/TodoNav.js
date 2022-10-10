import { Link, useParams } from "react-router-dom";
import classNames from "classnames";

import { useGetTodos } from "../../hooks/todos.hooks";

const TodoNav = () => {
  const { data: todos, status } = useGetTodos();
  const { todoId } = useParams();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <nav>
      {todos.map((todo) => (
        <div
          key={todo.id}
          className={classNames(
            "border-b",
            "border-slate-300",
            "py-1",
            "px-2",
            {
              "bg-blue-50": todoId == todo.id,
            },
            { "py-8": todoId == todo.id }
          )}
        >
          <Link
            to={`/todos/${todo.id}`}
            className="block truncate hover:underline"
          >
            {todo.title}
          </Link>
        </div>
      ))}
    </nav>
  );
};

export default TodoNav;
