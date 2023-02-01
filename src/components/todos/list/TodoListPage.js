import { useEffect } from 'react';
import classNames from 'classnames';

import { ListContextProvider } from '../../../contexts/list.context';
import ListLoading from '../../common/lists/ListLoading';
import ListEmpty from '../../common/lists/ListEmpty';
import ListTitle from '../../common/lists/ListTitle';
import TodoListFilter from './TodoListFilter';
import TodoListContent from './TodoListContent';

import { useGetTodos } from '../../../hooks/todos.hooks';

const TodoListPage = () => {
  useEffect(() => {
    document.title = 'Todos - Sample React Stack';
  }, []);

  const { data: todos, isLoading, isFetching } = useGetTodos();

  return (
    <ListContextProvider listOptions={{ sort: { by: 'title' }, pagination: { size: 2 } }}>
      <div className="mb-4">
        <ListTitle title="Todos" showLoading={isFetching} />
      </div>

      <div className="mb-4">
        <TodoListFilter />
      </div>

      {isLoading ? (
        <ListLoading />
      ) : (
        <div className={classNames({ 'opacity-25': isFetching })}>
          <TodoListContent todos={todos} />
          <ListEmpty items={todos} />
        </div>
      )}
    </ListContextProvider>
  );
};

export default TodoListPage;
