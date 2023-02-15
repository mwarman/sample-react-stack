import { Outlet } from 'react-router-dom';

import { ListContextProvider } from '../../contexts/list.context';

const TodosPage = () => {
  return (
    <ListContextProvider listOptions={{ sort: { by: 'summary' }, pagination: { size: 25 } }}>
      <Outlet />
    </ListContextProvider>
  );
};

export default TodosPage;
