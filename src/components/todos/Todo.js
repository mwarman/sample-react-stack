import { Link, useParams } from 'react-router-dom';

import { useGetTodo } from '../../hooks/todos.hooks';

const Todo = () => {
  const { todoId } = useParams();
  console.log(`todoId:${todoId}`);
  const { data: todo, status } = useGetTodo(todoId);
  console.log(`status::${status}::todo::${JSON.stringify(todo)}`);

  if (status === 'loading') {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <h2>{todo.title}</h2>
      <div>{todo.completed ? 'done' : 'not done'}</div>
      <div>
        <Link to={`/users/${todo.userId}`}>User</Link>
      </div>
    </div>
  );
};

export default Todo;
