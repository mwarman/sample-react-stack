import { NavLink, Outlet } from 'react-router-dom';

import TodoNav from '../todos/TodoNav';

const TodosPage = () => {
  return (
    <div>
      <h1>Todos</h1>
      <nav>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/todos/list">Todos</NavLink>
        </li>
      </nav>
      <div>
        <TodoNav />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default TodosPage;
