import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ArrowPathIcon } from "@heroicons/react/24/outline";

import Placeholder from "../common/Placeholder";
import Badge from "../common/Badge";
import ButtonBar from "../common/ButtonBar";
import Button from "../common/Button";
import TodoUser from "./TodoUser";
import { useGetTodo, useUpdateTodo } from "../../hooks/todos.hooks";

const Todo = () => {
  const navigate = useNavigate();
  const { todoId } = useParams();
  const updateTodo = useUpdateTodo();
  const { data: todo, status } = useGetTodo(todoId);

  const toggleCompleted = () => {
    updateTodo.mutate({
      ...todo,
      completed: !todo.completed,
    });
  };

  if (status === "loading") {
    return (
      <div className="mt-2 mr-4">
        <h2 className="mb-4">
          <Placeholder size="lg" className="w-3/4" />
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Placeholder size="lg" className="mr-2 inline-block w-1/4" />
            <Placeholder size="lg" className="inline-block w-1/4" />
          </div>
          <div>
            <Placeholder size="lg" className="mb-4 w-1/3" />
            <Placeholder size="lg" className="w-1/4" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-2 mr-4">
      <h2 className="mb-2 text-2xl font-bold text-slate-500">{todo.title}</h2>

      <ButtonBar className="mb-4">
        <Button
          variant="secondary"
          size="sm"
          className="mr-2"
          onClick={toggleCompleted}
          disabled={updateTodo.isLoading}
        >
          {updateTodo.isLoading ? (
            <div className="flex items-center">
              <ArrowPathIcon className="mr-2 h-4 w-4 animate-spin" />
              <span>
                {todo.completed ? "Mark Incomplete" : "Mark Complete"}
              </span>
            </div>
          ) : (
            <span>{todo.completed ? "Mark Incomplete" : "Mark Complete"}</span>
          )}
        </Button>
        <Button
          variant="secondary"
          size="sm"
          onClick={() => navigate(`/todos/${todo.id}/edit`)}
        >
          Edit
        </Button>
      </ButtonBar>

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
