import ButtonBar from '../../common/buttons/ButtonBar';
import Button from '../../common/buttons/Button';
import LoadingButton from '../../common/buttons/LoadingButton';

import { useDeleteTodo } from '../../../hooks/todos.hooks';
import { useToastsContext } from '../../../hooks/toasts.hooks';

const DeleteTodo = ({ onCancel, onSuccess, todo }) => {
  const toastsContext = useToastsContext();
  const deleteTodo = useDeleteTodo();

  const handleDeleteTodo = () => {
    deleteTodo.mutate(todo.id, {
      onSuccess: () => {
        toastsContext.createToast(`Deleted TODO-${todo.id}`);
        !!onSuccess && onSuccess();
      },
      onError: (err) => {
        console.error(`Failed to delete todo. Detail:`, err);
        // TODO display error notification
      },
    });
  };

  return (
    <div>
      <div className="mb-8">
        You are about to delete <span className="font-bold">{todo.title}</span>. Deleting a todo is
        permanent. Proceed?
      </div>
      <ButtonBar>
        <LoadingButton
          type="button"
          variant="primary"
          className="ml-auto mr-4 w-32"
          disabled={deleteTodo.isLoading}
          isLoading={deleteTodo.isLoading}
          onClick={handleDeleteTodo}
        >
          Delete
        </LoadingButton>
        <Button type="button" className="w-32" disabled={deleteTodo.isLoading} onClick={onCancel}>
          Cancel
        </Button>
      </ButtonBar>
    </div>
  );
};

export default DeleteTodo;
