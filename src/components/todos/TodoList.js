import TodoListItem from './TodoListItem';

const TodoList = ({ todos = [] }) => {
  return (
    <div>
      <div>
        <div>Title</div>
        <div>Status</div>
        <div>Assignee</div>
      </div>
      {todos.map((todo) => (
        <TodoListItem key={todo.id} {...todo} />
      ))}
    </div>
  );
};

export default TodoList;
