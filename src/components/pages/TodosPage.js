import { Outlet } from 'react-router-dom';

import TodoNav from '../todos/TodoNav';

const TodosPage = () => {
  return (
    <div className="grid h-full grid-cols-4 gap-4">
      <div className="overflow-y-scroll">
        <TodoNav />
      </div>
      <div className="col-span-3">
        <Outlet />
      </div>
    </div>
  );
};

export default TodosPage;
