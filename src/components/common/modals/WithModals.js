import CreateTodoModal from '../../todos/create/CreateTodoModal';
import DeleteTodoModal from '../../todos/delete/DeleteTodoModal';

/**
 * The `WithModals` includes a set of Modal components in the DOM.
 * Each Modal component uses the ModalContext to determine when to render.
 * @param {Object} props The component properties.
 * @param props.children The child components.
 * @returns JSX
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
