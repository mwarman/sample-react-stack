import ListHeader from '../../common/lists/ListHeader';
import ListColumn from '../../common/lists/ListColumn';
import TodoList from './TodoList';
import ListFooter from '../../common/lists/ListFooter';

const TodoListContent = ({ todos = [] }) => {
  if (todos.length === 0) return null;

  return (
    <>
      <div className="mb-0">
        <ListHeader>
          <ListColumn className="col-span-7" name="Title" path="title" />
          <ListColumn className="col-span-2" name="Status" path="completed" />
          <ListColumn className="col-span-2" name="Assignee" path="accountId" />
          <div></div>
        </ListHeader>
      </div>

      <div className="my-1">
        <TodoList todos={todos} />
      </div>

      <div>
        <ListFooter items={todos} />
      </div>
    </>
  );
};

export default TodoListContent;
