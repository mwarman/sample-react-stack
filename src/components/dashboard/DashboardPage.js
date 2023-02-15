import { useEffect } from 'react';

import Badge from '../common/badges/Badge';
import Loading from '../common/Loading';

import { useGetTodos } from '../../hooks/todos.hooks';
import { selectTodos } from '../../selectors/todos.selectors';

const DashboardPage = () => {
  useEffect(() => {
    document.title = 'Dashboard - Sample React Stack';
  }, []);

  const { data: todos, isLoading } = useGetTodos();

  if (isLoading) {
    return <Loading className="my-8 animate-pulse justify-center text-6xl text-slate-200" />;
  }

  const totalCount = selectTodos(todos).length;
  const notStartedCount = selectTodos(todos, {
    matches: { statusObj: { category: 'todo' } },
  }).length;
  const inProgressCount = selectTodos(todos, {
    matches: { statusObj: { category: 'in_progress' } },
  }).length;
  const doneCount = selectTodos(todos, { matches: { statusObj: { category: 'done' } } }).length;

  return (
    <div>
      <div className="mb-8 text-2xl font-bold">Your Work</div>

      <div className="mb-2 flex w-48 items-center justify-between">
        All <Badge>{totalCount}</Badge>
      </div>
      <div className="mb-2 flex w-48 items-center justify-between">
        To Do <Badge>{notStartedCount}</Badge>
      </div>
      <div className="mb-2 flex w-48 items-center justify-between">
        In Progress <Badge variant="primary">{inProgressCount}</Badge>
      </div>
      <div className="mb-2 flex w-48 items-center justify-between">
        Done <Badge variant="success">{doneCount}</Badge>
      </div>
    </div>
  );
};

export default DashboardPage;
