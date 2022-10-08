import { Link } from 'react-router-dom';

const TodoListItem = ({ id, userId, title, completed }) => {
  return (
    <div>
      <div>{title}</div>
      <div>{completed ? 'done' : 'not done'}</div>
      <div>
        <Link to={`/users/${userId}`}>User</Link>
      </div>
    </div>
  );
};

export default TodoListItem;
