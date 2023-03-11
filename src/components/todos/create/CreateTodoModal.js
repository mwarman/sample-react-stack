/**
 * The `CreateTodoModal` React component.
 * @module components/todos/create/CreateTodoModal
 */

import Modal from '../../common/modals/Modal';
import ModalTitle from '../../common/modals/ModalTitle';
import TodoCreate from './TodoCreate';

import { useModalContext } from '../../../hooks/modal.hooks';

/**
 * The `CreateTodoModal` component renders a `Modal` containing the
 * `TodoCreate` component. Integrates with the `ModalContext` to
 * determine when to render.
 * @function
 * @returns {JSXElement} JSX
 */
const CreateTodoModal = () => {
  const { modalOptions, setModalOptions } = useModalContext();
  const { modal = '', props = {} } = modalOptions;

  // hide the modal; reset modal context
  const hide = () => {
    setModalOptions();
  };

  // modal is hidden
  if (modal !== 'todoCreate') {
    return null;
  }

  // render the modal
  return (
    <Modal onHide={hide} size="lg">
      <ModalTitle title="Create Todo" className="p-4" />
      <div className="p-4">
        <TodoCreate onSuccess={hide} onCancel={hide} {...props} />
      </div>
    </Modal>
  );
};

export default CreateTodoModal;
