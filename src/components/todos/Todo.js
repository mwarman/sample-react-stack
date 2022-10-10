import { useParams } from "react-router-dom";

import Badge from "../common/Badge";
import TodoUser from "./TodoUser";
import { useGetTodo } from "../../hooks/todos.hooks";

const Todo = () => {
  const { todoId } = useParams();
  const { data: todo, status } = useGetTodo(todoId);

  if (status === "loading") {
    return <h2 className="text-xl">Loading...</h2>;
  }

  return (
    <div className="mt-2">
      <h2 className="mb-2 text-2xl font-bold text-slate-500">{todo.title}</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <span className="mr-2 font-bold">Status:</span>
          {todo.completed ? (
            <Badge type="success">DONE</Badge>
          ) : (
            <Badge>NOT STARTED</Badge>
          )}
        </div>
        <div>
          <TodoUser userId={todo.userId} />
        </div>
      </div>
    </div>
  );
};

export default Todo;
