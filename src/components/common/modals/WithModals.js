import CreateTodoModal from '../../todos/create/CreateTodoModal';
import DeleteTodoModal from '../../todos/delete/DeleteTodoModal';

import { useModalContext } from '../../../hooks/modal.hooks';

/**
 * The `WithModals` includes a set of Modal components in the DOM.
 * Each Modal component uses the ModalContext to determine when to render.
 * @param {Object} props The component properties.
 * @param props.children The child components.
 * @returns JSX
 */
const WithModals = ({ children }) => {
  const { modalOptions, setModalOptions } = useModalContext();
  const { modal = '', props = {} } = modalOptions;

  return (
    <>
      <CreateTodoModal />
      <DeleteTodoModal />

      {children}
    </>
  );
};

export default WithModals;
