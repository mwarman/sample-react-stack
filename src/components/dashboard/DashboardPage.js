import { useEffect } from 'react';

import Badge from '../common/Badge';
import Loading from '../common/Loading';

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

  if (isLoading) {
    return <Loading className="my-8 animate-pulse justify-center text-6xl text-slate-200" />;
  }

  return (
    <div>
      <div className="mb-8 text-2xl">Your Work</div>

      <div className="mb-2 flex w-48 items-center justify-between">
        All <Badge>{allTodos.length}</Badge>
      </div>
      <div className="mb-2 flex w-48 items-center  justify-between">
        To Do <Badge>{incompleteTodos.length}</Badge>
      </div>
      <div className="mb-2 flex w-48 items-center  justify-between">
        Done <Badge variant="success">{completeTodos.length}</Badge>
      </div>
    </div>
  );
};

export default DashboardPage;
