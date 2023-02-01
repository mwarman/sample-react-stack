import ListHeader from '../../common/lists/ListHeader';
import ListColumn from '../../common/lists/ListColumn';
import TodoList from './TodoList';
import ListFooter from '../../common/lists/ListFooter';
import ListEmpty from '../../common/lists/ListEmpty';

import { useListContext } from '../../../hooks/list.hooks';
import { selectTodosWithListContext } from '../../../selectors/todos.selectors';

const TodoListContent = ({ todos = [] }) => {
  const { list: listContext } = useListContext();
  const { page, items } = selectTodosWithListContext(todos, listContext);

  if (items.length === 0) {
    return <ListEmpty />;
  }

  return (
    <>
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
    </>
  );
};

export default TodoListContent;
