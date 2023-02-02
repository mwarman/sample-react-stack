import CreateTodoModal from '../../todos/create/CreateTodoModal';
import DeleteTodoModal from '../../todos/delete/DeleteTodoModal';

import { useModalContext } from '../../../hooks/modal.hooks';

/**
 * The `WithModals` component uses the `ModalContext` to conditionally render
 * Modal components.
 * @param {Object} props The component properties.
 * @param props.children The child components.
 * @returns JSX
 */
const WithModals = ({ children }) => {
  const { modalOptions, setModalOptions } = useModalContext();
  const { modal = '', props = {} } = modalOptions;

  return (
    <>
      <CreateTodoModal
        isHidden={modal !== 'todoCreate'}
        onHide={() => {
          setModalOptions();
        }}
        {...props}
      />
      <DeleteTodoModal
        isHidden={modal !== 'todoDelete'}
        onHide={() => {
          setModalOptions();
        }}
        {...props}
      />

      {children}
    </>
  );
};

export default WithModals;
