import { useEffect } from 'react';
import classNames from 'classnames';

import ListTitle from '../../common/lists/ListTitle';
import ListFilter from '../../common/lists/ListFilter';
import ListHeader from '../../common/lists/ListHeader';
import ListColumn from '../../common/lists/ListColumn';
import TodoList from './TodoList';
import ListFooter from '../../common/lists/ListFooter';
import ListLoading from '../../common/lists/ListLoading';
import ListEmpty from '../../common/lists/ListEmpty';

import { useGetTodos } from '../../../hooks/todos.hooks';
import { useListContext } from '../../../hooks/list.hooks';
import { selectTodosWithListContext } from '../../../selectors/todos.selectors';
import ListError from '../../common/lists/ListError';

const TodoListLayout = () => {
  const { data: todos, error, isError, isLoading, isFetching } = useGetTodos();
  const { list: listContext, setPage } = useListContext();
  const { page = [], items = [] } = selectTodosWithListContext(todos, listContext);
  const isEmpty = items && items.length === 0;

  /** if filtering results in an empty page, go to first page */
  useEffect(() => {
    if (items.length > 0 && page.length === 0) {
      setPage(1);
    }
  }, [page, items]);

  return (
    <div>
      <div className="mb-4">
        <ListTitle title="Todos" showLoading={isFetching} />
      </div>

      <div className="mb-4">
        <ListFilter />
      </div>

      <ListLoading isLoading={isLoading}>
        <ListError isError={isError} error={error}>
          <ListEmpty isEmpty={isEmpty}>
            <div className={classNames({ 'opacity-25': isFetching })}>
              <ListHeader>
                <ListColumn className="col-span-7" name="Title" path="title" />
                <ListColumn className="col-span-2" name="Status" path="completed" />
                <ListColumn className="col-span-2" name="Assignee" path="accountId" />
                <div></div>
              </ListHeader>

              <div className="my-1">
                <TodoList todos={page} />
              </div>

              <ListFooter items={items} />
            </div>
          </ListEmpty>
        </ListError>
      </ListLoading>
    </div>
  );
};

export default TodoListLayout;
