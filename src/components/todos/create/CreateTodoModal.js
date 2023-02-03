import Modal from '../../common/modals/Modal';
import TodoCreate from './TodoCreate';

const CreateTodoModal = ({ isHidden = true, onHide }) => {
  const hide = () => {
    !!onHide && onHide();
  };

  if (isHidden) {
    return null;
  }

  return (
    <Modal onClose={hide} size="lg" title="Create Todo">
      <TodoCreate onSuccess={hide} onCancel={hide} />
    </Modal>
  );
};

export default CreateTodoModal;
