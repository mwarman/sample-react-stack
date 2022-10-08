import { Link } from 'react-router-dom';

import { useGetTodos } from '../../hooks/todos.hooks';

const TodoNav = () => {
  const { data: todos, status } = useGetTodos();

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  return (
    <ol>
      {todos.map((todo) => (
        <li key={todo.id}>
          <Link to={`/todos/${todo.id}`}>{todo.title}</Link>
        </li>
      ))}
    </ol>
  );
};

export default TodoNav;
