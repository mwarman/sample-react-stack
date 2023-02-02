import { useEffect } from 'react';

import { ListContextProvider } from '../../../contexts/list.context';
import TodoListLayout from './TodoListLayout';

const TodoListPage = () => {
  useEffect(() => {
    document.title = 'Todos - Sample React Stack';
  }, []);

  return (
    <ListContextProvider listOptions={{ sort: { by: 'title' }, pagination: { size: 2 } }}>
      <TodoListLayout />
    </ListContextProvider>
  );
};

export default TodoListPage;
