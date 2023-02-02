import Modal from '../../common/modals/Modal';
import DeleteTodo from './DeleteTodo';

const DeleteTodoModal = ({ isHidden = true, onHide, todoId }) => {
  const hide = () => {
    !!onHide && onHide();
  };

  if (isHidden) {
    return null;
  }

  return (
    <Modal onClose={hide} size="lg">
      <DeleteTodo onCancel={hide} onSuccess={hide} todoId={todoId} />
    </Modal>
  );
};

export default DeleteTodoModal;
