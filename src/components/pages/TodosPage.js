import { NavLink } from 'react-router-dom';

import { useGetTodos } from '../../hooks/todos.hooks';
import TodoList from '../todos/TodoList';

const TodosPage = () => {
  const { data: todos, status } = useGetTodos();

  return (
    <div>
      <h1>Todos</h1>
      <nav>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/todos">Todos</NavLink>
        </li>
      </nav>
      <div>
        <TodoList todos={todos}></TodoList>
      </div>
    </div>
  );
};

export default TodosPage;
