/**
 * The `DeleteTodoModal` React component.
 * @module components/todos/delete/DeleteTodoModal
 */

import Modal from '../../common/modals/Modal';
import ModalTitle from '../../common/modals/ModalTitle';
import DeleteTodo from './DeleteTodo';

import { useModalContext } from '../../../hooks/modal.hooks';

/**
 * The `DeleteTodoModal` component renders a `Modal` containing the
 * `DeleteTodo` component. Integrates with the `ModalContext` to
 * determine when to render.
 * @function
 * @returns {JSXElement} JSX
 */
const DeleteTodoModal = () => {
  const { modalOptions, setModalOptions } = useModalContext();
  const { modal = '', props = {} } = modalOptions;

  // hide the modal; reset modal context
  const hide = () => {
    setModalOptions();
  };

  // modal is hidden
  if (modal !== 'todoDelete') {
    return null;
  }

  return (
    <Modal onClose={hide} size="lg">
      <ModalTitle
        title={
          <>
            <span className="mr-1 font-bold">Delete</span>
            {props.todo.summary}
          </>
        }
        className="p-4"
      />
      <div className="p-4">
        <DeleteTodo onCancel={hide} onSuccess={hide} {...props} />
      </div>
    </Modal>
  );
};

export default DeleteTodoModal;
