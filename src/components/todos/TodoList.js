import TodoListItem from "./TodoListItem";
import TodoListItemLoading from "./TodoListItemLoading";

import { keys } from "../../utils/keys";

const TodoList = ({ isLoading, todos = [] }) => {
  return (
    <table className="w-full">
      <thead>
        <tr className="border-b-2 border-slate-300 font-bold">
          <td className="p-2">Title</td>
          <td className="p-2">Status</td>
          <td className="p-2">Assignee</td>
        </tr>
      </thead>
      <tbody>
        {isLoading ? (
          <>
            {keys(5).map(({ key }) => (
              <TodoListItemLoading key={key} />
            ))}
          </>
        ) : (
          todos.map((todo) => <TodoListItem key={todo.id} {...todo} />)
        )}
      </tbody>
    </table>
  );
};

export default TodoList;
