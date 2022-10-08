import { Link } from 'react-router-dom';

const TodoListItem = ({ id, userId, title, completed }) => {
  return (
    <tr>
      <td>
        <Link to={`/todos/${id}`}>{title}</Link>
      </td>
      <td>{completed ? 'done' : 'not done'}</td>
      <td>
        <Link to={`/users/${userId}`}>User</Link>
      </td>
    </tr>
  );
};

export default TodoListItem;
