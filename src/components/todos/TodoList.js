import TodoListItem from './TodoListItem';
import Placeholder from '../common/Placeholder';
import CreateTodoButton from './CreateTodoButton';

import { useGetTodos } from '../../hooks/todos.hooks';
import { keys } from '../../utils/keys';

const TodoList = () => {
  const { data: todos, status } = useGetTodos();

  if (status === 'loading') {
    return (
      <div>
        <div className="m-2 grid grid-cols-4 gap-4">
          <Placeholder className="col-span-2" size="xl" />
          <Placeholder size="xl" />
          <Placeholder size="xl" />
        </div>
        {keys(5).map(({ key }) => (
          <div key={key} className="m-2 grid grid-cols-4 gap-4">
            <Placeholder className="col-span-2" size="lg" />
            <Placeholder size="lg" />
            <Placeholder size="lg" />
          </div>
        ))}
      </div>
    );
  }

  if (!todos || todos.length === 0) {
    return (
      <div className="flex h-1/2 w-full items-center justify-center">
        <div className="mr-2 text-2xl">You don't have any todos yet.</div>
        <CreateTodoButton size="md" />
      </div>
    );
  }

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
        {todos.map((todo) => (
          <TodoListItem key={todo.id} {...todo} />
        ))}
      </tbody>
    </table>
  );
};

export default TodoList;
