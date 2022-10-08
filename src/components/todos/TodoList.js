import TodoListItem from './TodoListItem';

const TodoList = ({ todos = [] }) => {
  return (
    <table>
      <thead>
        <tr>
          <td>Title</td>
          <td>Status</td>
          <td>Assignee</td>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo) => (
          <TodoListItem key={todo.id} {...todo} />
        ))}
      </tbody>
    </table>
  );
};

export default TodoList;
