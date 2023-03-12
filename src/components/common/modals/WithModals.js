/**
 * The `WithModals` React component.
 * @module components/common/modals/WithModals
 */

import CreateTodoModal from '../../todos/create/CreateTodoModal';
import DeleteTodoModal from '../../todos/delete/DeleteTodoModal';

/**
 * The `WithModals` component injects a set of Modal components in the DOM.
 * Each Modal component uses the ModalContext to determine when to render.
 * @function
 * @param {Object} props The component properties.
 * @param props.children The child components.
 * @returns {JSXElement} JSX
 * @example
 * <ModalContextProvider>
 *   <WithModals>
 *     <Header />
 *     <Outlet />
 *     <Toasts />
 *   </WithModals>
 * </ModalContextProvider>
 */
const WithModals = ({ children }) => {
  return (
    <>
      <CreateTodoModal />
      <DeleteTodoModal />

      {children}
    </>
  );
};

export default WithModals;
