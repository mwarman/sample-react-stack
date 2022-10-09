import { useGetTodos } from "../../hooks/todos.hooks";
import TodoList from "../todos/TodoList";

const TodoListPage = () => {
  const { data: todos, status } = useGetTodos();

  return (
    <div className="mt-3">
      <TodoList todos={todos}></TodoList>
    </div>
  );
};

export default TodoListPage;
