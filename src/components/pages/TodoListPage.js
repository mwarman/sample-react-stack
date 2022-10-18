import classNames from 'classnames';
import { ArrowPathIcon } from '@heroicons/react/24/outline';

import { useGetTodos } from '../../hooks/todos.hooks';
import { useTodoListFilter } from '../../hooks/todolistfilter.hooks';
import { selectTodos } from '../../selectors/todos.selectors';

import TodoListFilter from '../todos/TodoListFilter';
import TodoList from '../todos/TodoList';

const TodoListPage = () => {
  const { data: todos, status, isFetching } = useGetTodos();
  const [displayOptions, dispatch] = useTodoListFilter();
  const selectedTodos = selectTodos(todos, displayOptions);

  return (
    <div className="h-full p-4">
      <div className="flex items-center">
        <div className="mr-1 text-2xl font-bold">All Todos</div>
        {isFetching && <ArrowPathIcon className="inline-block h-6 w-6 animate-spin" />}
      </div>

      <div className="mt-3">
        <TodoListFilter displayOptions={displayOptions} dispatch={dispatch} />
      </div>

      <div className={classNames('mt-3', { 'opacity-25': isFetching })}>
        <TodoList
          todos={selectedTodos}
          isFetching={isFetching}
          status={status}
          displayOptions={displayOptions}
          dispatch={dispatch}
        />
      </div>
    </div>
  );
};

export default TodoListPage;
