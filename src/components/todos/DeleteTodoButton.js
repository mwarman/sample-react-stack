import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useRemoveTodo } from '../../hooks/todos.hooks';
import { useToastsContext } from '../../hooks/toasts.hooks';

import ButtonBar from '../common/ButtonBar';
import Button from '../common/Button';
import LoadingButton from '../common/LoadingButton';
import Modal from '../common/Modal';

const DeleteTodoButton = ({ todo, ...props }) => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const toastsContext = useToastsContext();
  const removeTodo = useRemoveTodo();

  const deleteTodo = () => {
    removeTodo.mutate(todo.id, {
      onSuccess: () => {
        toastsContext.createToast(`Deleted TODO-${todo.id} successfully.`);
        setShowModal(false);
        navigate(`/todos/list`);
      },
      onError: (err) => {
        console.error(`Failed to delete todo. Detail:`, err);
        // TODO display error notification
      },
    });
  };

  return (
    <>
      <Button
        size="sm"
        variant="primary"
        onClick={() => setShowModal(true)}
        title="Delete todo"
        {...props}
      >
        Delete
      </Button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)} size="fit">
          <div className="m-4">
            <div>
              Delete todo <span className="italic">{todo.title}?</span>
            </div>
            <ButtonBar className="mt-4">
              <Button variant="secondary" className="mr-2" onClick={() => setShowModal(false)}>
                Cancel
              </Button>
              <LoadingButton
                variant="primary"
                type="button"
                disabled={removeTodo.isLoading}
                isLoading={removeTodo.isLoading}
                onClick={deleteTodo}
              >
                Delete
              </LoadingButton>
            </ButtonBar>
          </div>
        </Modal>
      )}
    </>
  );
};

export default DeleteTodoButton;
