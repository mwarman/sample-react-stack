import { NavLink } from 'react-router-dom';

import { useGetTodos } from '../../hooks/todos.hooks';
import TodoList from '../todos/TodoList';

const TodoListPage = () => {
  const { data: todos, status } = useGetTodos();

  return (
    <div>
      <h1>Todo List</h1>
      <nav>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/todos/list">Todos</NavLink>
        </li>
      </nav>
      <div>
        <TodoList todos={todos}></TodoList>
      </div>
    </div>
  );
};

export default TodoListPage;
