import { Link, useParams } from "react-router-dom";
import classNames from "classnames";

import Placeholder from "../common/Placeholder";

import { useGetTodos } from "../../hooks/todos.hooks";
import { keys } from "../../utils/keys";

const TodoNav = () => {
  const { data: todos, status } = useGetTodos();
  const { todoId } = useParams();

  if (status === "loading") {
    return (
      <nav>
        {keys(10).map(({ key }) => (
          <div key={key} className="border-b border-slate-300 py-2 px-2">
            <Placeholder size="lg" />
          </div>
        ))}
      </nav>
    );
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
