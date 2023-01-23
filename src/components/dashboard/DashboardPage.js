import { useEffect } from 'react';

import { useGetTodos } from '../../hooks/todos.hooks';
import { selectTodos } from '../../selectors/todos.selectors';

const DashboardPage = () => {
  useEffect(() => {
    document.title = 'Dashboard - Sample React Stack';
  }, []);

  const { data: todos, isLoading } = useGetTodos();
  const allTodos = selectTodos(todos);
  const incompleteTodos = selectTodos(todos, { matches: { completed: false } });
  const completeTodos = selectTodos(todos, { matches: { completed: true } });

  return (
    <div>
      <div className="mb-8 text-2xl">Your Work</div>

      <div className="grid grid-cols-3 gap-8">
        <div className="flex flex-col items-center">
          <div className="text-lg">All</div>
          <div>{allTodos.length}</div>
        </div>

        <div className="flex flex-col items-center">
          <div className="text-lg">To Do</div>
          <div>{incompleteTodos.length}</div>
        </div>

        <div className="flex flex-col items-center">
          <div className="text-lg">Done</div>
          <div>{completeTodos.length}</div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
