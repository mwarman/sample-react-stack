/**
 * The `TodosPage` React component.
 * @module components/todos/TodosPage
 */

import { Outlet } from 'react-router-dom';

import { ListContextProvider } from '../../contexts/list.context';

/**
 * The `TodosPage` component renders the main page for displaying `/todos`
 * routes. Uses `ListContextProvider` to provide list control actions and
 * metadata for the list of todos.
 * @function
 * @returns {JSXElement} JSX
 */
const TodosPage = () => {
  return (
    <ListContextProvider listOptions={{ sort: { by: 'summary' }, pagination: { size: 25 } }}>
      <Outlet />
    </ListContextProvider>
  );
};

export default TodosPage;
