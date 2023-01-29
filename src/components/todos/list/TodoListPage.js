import { useEffect } from 'react';
import classNames from 'classnames';

import { useGetTodos } from '../../../hooks/todos.hooks';
import { useTodoListFilter } from '../../../hooks/todolistfilter.hooks';
import { selectTodos } from '../../../selectors/todos.selectors';

import Loading from '../../common/Loading';
import TodoListFilter from './TodoListFilter';
import TodoList from './TodoList';

const TodoListPage = () => {
  useEffect(() => {
    document.title = 'Todos - Sample React Stack';
  }, []);

  const { data: todos, status, isFetching } = useGetTodos();
  const [displayOptions, dispatch] = useTodoListFilter();
  const selectedTodos = selectTodos(todos, displayOptions);

  return (
    <div className="h-full">
      <div className="flex items-center">
        <div className="text-2xl">Todos</div>
        {isFetching && <Loading className="ml-2 text-xl text-slate-600" />}
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
