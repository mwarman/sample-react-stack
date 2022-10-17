import { useState } from 'react';
import orderBy from 'lodash/orderBy';
import classNames from 'classnames';
import { ArrowPathIcon } from '@heroicons/react/24/outline';

import { useGetTodos } from '../../hooks/todos.hooks';

import TodoList from '../todos/TodoList';

const TodoListPage = () => {
  const [sortBy, setSortBy] = useState('title');
  const [sortDirection, setSortDirection] = useState('asc');
  const { data: todos, status, isFetching } = useGetTodos();
  const sortedTodos = orderBy(todos, [sortBy], [sortDirection]);

  return (
    <div className="h-full p-4">
      <div className="flex items-center">
        <div className="mr-1 text-2xl font-bold">All Todos</div>
        {isFetching && <ArrowPathIcon className="inline-block h-6 w-6 animate-spin" />}
      </div>
      <div className={classNames('mt-3', { 'opacity-25': isFetching })}>
        <TodoList
          todos={sortedTodos}
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
