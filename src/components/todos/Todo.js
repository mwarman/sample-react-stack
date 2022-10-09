import { Link, useParams } from "react-router-dom";

import { useGetTodo } from "../../hooks/todos.hooks";

const Todo = () => {
  const { todoId } = useParams();
  // console.log(`todoId:${todoId}`);
  const { data: todo, status } = useGetTodo(todoId);
  // console.log(`status::${status}::todo::${JSON.stringify(todo)}`);

  if (status === "loading") {
    return <h2 className="text-xl">Loading...</h2>;
  }

  return (
    <div className="mt-2">
      <h2 className="text-2xl font-bold text-slate-500">{todo.title}</h2>
      <div>
        <span className="mr-2 font-bold">Status:</span>
        {todo.completed ? "done" : "not done"}
      </div>
      <div>
        <span className="mr-2 font-bold">User:</span>
        <Link
          to={`/users/${todo.userId}`}
          className="text-blue-500 hover:text-blue-700"
        >
          User
        </Link>
      </div>
    </div>
  );
};

export default Todo;
