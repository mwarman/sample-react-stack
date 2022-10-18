import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/24/outline';

import TodoListItem from './TodoListItem';
import Placeholder from '../common/Placeholder';
import CreateTodoButton from './CreateTodoButton';

import { keys } from '../../utils/keys';

const TodoList = ({ todos, status, sortBy, setSortBy, sortDirection, setSortDirection }) => {
  const setSort = (attr = 'title') => {
    if (attr === sortBy) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(attr);
      setSortDirection('asc');
    }
  };

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
        <tr className="border-b-2 border-slate-300">
          <td>
            <div
              className="flex cursor-pointer items-center p-2 hover:bg-slate-100"
              onClick={() => setSort('title')}
            >
              <span className="mr-1 font-bold">Title</span>
              {sortBy === 'title' && sortDirection === 'asc' && (
                <ArrowUpIcon className="inline-block h-4 w-4 stroke-slate-500 stroke-2" />
              )}
              {sortBy === 'title' && sortDirection === 'desc' && (
                <ArrowDownIcon className="inline-block h-4 w-4 stroke-slate-500 stroke-2" />
              )}
            </div>
          </td>
          <td>
            <div
              className="flex cursor-pointer items-center p-2 hover:bg-slate-100"
              onClick={() => setSort('completed')}
            >
              <span className="mr-1 font-bold">Status</span>
              {sortBy === 'completed' && sortDirection === 'asc' && (
                <ArrowUpIcon className="inline-block h-4 w-4 stroke-slate-500 stroke-2" />
              )}
              {sortBy === 'completed' && sortDirection === 'desc' && (
                <ArrowDownIcon className="inline-block h-4 w-4 stroke-slate-500 stroke-2" />
              )}
            </div>
          </td>
          <td>
            <div
              className="flex cursor-pointer items-center p-2 hover:bg-slate-100"
              onClick={() => setSort('accountId')}
            >
              <span className="mr-1 font-bold">Assignee</span>
              {sortBy === 'accountId' && sortDirection === 'asc' && (
                <ArrowUpIcon className="inline-block h-4 w-4 stroke-slate-500 stroke-2" />
              )}
              {sortBy === 'accountId' && sortDirection === 'desc' && (
                <ArrowDownIcon className="inline-block h-4 w-4 stroke-slate-500 stroke-2" />
              )}
            </div>
          </td>
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
