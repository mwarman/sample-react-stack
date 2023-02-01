import { useEffect } from 'react';
import classNames from 'classnames';

import { ListContextProvider } from '../../../contexts/list.context';
import ListLoading from '../../common/lists/ListLoading';
import ListEmpty from '../../common/lists/ListEmpty';
import ListTitle from '../../common/lists/ListTitle';
import TodoListFilter from './TodoListFilter';
import TodoListContent from './TodoListContent';

import { useGetTodos } from '../../../hooks/todos.hooks';
import { useTodoListFilter } from '../../../hooks/todolistfilter.hooks';
import { selectTodos } from '../../../selectors/todos.selectors';

const TodoListPage = () => {
  useEffect(() => {
    document.title = 'Todos - Sample React Stack';
  }, []);

  const { data: todos, isLoading, isFetching } = useGetTodos();
  const [displayOptions, dispatch] = useTodoListFilter();
  const selectedTodos = selectTodos(todos, displayOptions);

  return (
    <ListContextProvider listOptions={{ sort: { by: 'title' }, pagination: { size: 2 } }}>
      <div className="mb-4">
        <ListTitle title="Todos" showLoading={isFetching} />
      </div>

      <div className="mb-4">
        <TodoListFilter displayOptions={displayOptions} dispatch={dispatch} />
      </div>

      {isLoading ? (
        <ListLoading />
      ) : (
        <div className={classNames({ 'opacity-25': isFetching })}>
          <TodoListContent todos={selectedTodos} />
          <ListEmpty items={selectedTodos} />
        </div>
      )}
    </ListContextProvider>
  );
};

export default TodoListPage;
