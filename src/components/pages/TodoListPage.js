import { useState } from 'react';
import classNames from 'classnames';
import { ArrowPathIcon } from '@heroicons/react/24/outline';

import { useGetTodos } from '../../hooks/todos.hooks';
import { selectTodos } from '../../selectors/todos.selectors';

import TodoList from '../todos/TodoList';

const TodoListPage = () => {
  const [filterBy, setFilterBy] = useState({});
  const [sortBy, setSortBy] = useState('title');
  const [sortDirection, setSortDirection] = useState('asc');
  const { data: todos, status, isFetching } = useGetTodos();
  const selectedTodos = selectTodos(todos, {
    matches: filterBy,
    sortBy: [sortBy],
    sortOrder: [sortDirection],
  });

  return (
    <div className="h-full p-4">
      <div className="flex items-center">
        <div className="mr-1 text-2xl font-bold">All Todos</div>
        {isFetching && <ArrowPathIcon className="inline-block h-6 w-6 animate-spin" />}
      </div>

      <div className="mt-3 flex text-slate-400">
        <div
          className={classNames('w-[100px] cursor-pointer text-center text-lg', {
            'border-b-4 border-blue-500 font-bold text-blue-500': filterBy.completed === undefined,
          })}
          onClick={() => setFilterBy({})}
        >
          All
        </div>
        <div
          className={classNames('w-[100px] cursor-pointer text-center text-lg', {
            'border-b-4 border-blue-500 font-bold text-blue-500': filterBy.completed === false,
          })}
          onClick={() => setFilterBy({ completed: false })}
        >
          To Do
        </div>
        <div
          className={classNames('w-[100px] cursor-pointer text-center text-lg', {
            'border-b-4 border-blue-500 font-bold text-blue-500': filterBy.completed === true,
          })}
          onClick={() => setFilterBy({ completed: true })}
        >
          Done
        </div>
      </div>

      <div className={classNames('mt-3', { 'opacity-25': isFetching })}>
        <TodoList
          todos={selectedTodos}
          isFetching={isFetching}
          status={status}
          sortBy={sortBy}
          setSortBy={setSortBy}
          sortDirection={sortDirection}
          setSortDirection={setSortDirection}
        />
      </div>
    </div>
  );
};

export default TodoListPage;
