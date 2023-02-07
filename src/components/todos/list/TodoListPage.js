import { useEffect } from 'react';

import { ListContextProvider } from '../../../contexts/list.context';
import TodoListLayout from './TodoListLayout';

const TodoListPage = () => {
  useEffect(() => {
    document.title = 'Todos - Sample React Stack';
  }, []);

  return (
    <ListContextProvider listOptions={{ sort: { by: 'summary' }, pagination: { size: 25 } }}>
      <TodoListLayout />
    </ListContextProvider>
  );
};

export default TodoListPage;
