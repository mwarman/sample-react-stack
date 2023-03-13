/**
 * The `TodoList` React component.
 * @module components/todos/list/TodoList
 */

import { useEffect } from 'react';
import classNames from 'classnames';

import ListTitle from '../../common/lists/ListTitle';
import ListFilter from '../../common/lists/ListFilter';
import ListHeader from '../../common/lists/ListHeader';
import ListColumn from '../../common/lists/ListColumn';
import ListFooter from '../../common/lists/ListFooter';
import ListLoading from '../../common/lists/ListLoading';
import ListEmpty from '../../common/lists/ListEmpty';
import TodoListItem from './TodoListItem';

import { useAuthState } from '../../../hooks/auth.hooks';
import { useGetTodos } from '../../../hooks/todos.hooks';
import { useListContext } from '../../../hooks/list.hooks';
import { selectTodosWithListContext } from '../../../selectors/todos.selectors';
import ListError from '../../common/lists/ListError';

/**
 * The `TodoList` component renders a collection of Todos. Integrates with
 * `ListContext` to provide list controls.
 * @function
 * @returns {JSXElement} JSX
 */
const TodoList = () => {
  const { data: authState } = useAuthState();
  const {
    data: todos,
    error,
    isError,
    isLoading,
    isFetching,
  } = useGetTodos(authState?.id, {
    enabled: !!authState?.id,
  });
  const { list: listContext, setPage } = useListContext();
  const { page = [], items = [] } = selectTodosWithListContext(todos, listContext);
  const isEmpty = items && items.length === 0;

  useEffect(() => {
    document.title = 'Todos - Sample React Stack';
  }, []);

  /** if filtering results in an empty page, go to first page */
  useEffect(() => {
    if (items.length > 0 && page.length === 0) {
      setPage(1);
    }
    // eslint-disable-next-line
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
                <ListColumn
                  className="col-span-5 overflow-clip whitespace-nowrap"
                  name="Summary"
                  path="summary"
                />
                <ListColumn
                  className="col-span-2 overflow-clip whitespace-nowrap"
                  name="Status"
                  path="statusObj.ordinal"
                />
                <ListColumn
                  className="col-span-2 overflow-clip whitespace-nowrap"
                  name="Priority"
                  path="priorityObj.ordinal"
                />
                <ListColumn
                  className="col-span-2 overflow-clip whitespace-nowrap"
                  name="Due"
                  path="dueAt"
                />
                <div></div>
              </ListHeader>

              <div className="my-1">
                {page?.map((todo) => (
                  <TodoListItem key={todo.id} todo={todo} />
                ))}
              </div>

              <ListFooter items={items} />
            </div>
          </ListEmpty>
        </ListError>
      </ListLoading>
    </div>
  );
};

export default TodoList;
