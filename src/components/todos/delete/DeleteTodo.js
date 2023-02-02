import classNames from 'classnames';

import Placeholder from '../../common/Placeholder';
import ButtonBar from '../../common/buttons/ButtonBar';
import Button from '../../common/buttons/Button';
import LoadingButton from '../../common/buttons/LoadingButton';

import { useDeleteTodo, useGetTodo } from '../../../hooks/todos.hooks';
import { useToastsContext } from '../../../hooks/toasts.hooks';

const DeleteTodo = ({ onCancel, onSuccess, todoId }) => {
  const toastsContext = useToastsContext();
  const deleteTodo = useDeleteTodo();
  const { data: todo, isLoading } = useGetTodo(todoId);

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
      <div className="flex items-center py-4 text-2xl">
        <div className="mr-2 font-bold">Delete</div>
        {isLoading ? <Placeholder className="w-60" size="xl" /> : <>{todo.title}</>}
      </div>
      <div className={classNames({ 'animate-pulse opacity-25': isLoading })}>
        <div className="my-4">Deleting a todo is permanent. Proceed?</div>
        <div className="border-t border-slate-300 pt-6 pb-4">
          <ButtonBar>
            <LoadingButton
              type="button"
              variant="primary"
              className="ml-auto mr-4 w-32"
              disabled={isLoading || deleteTodo.isLoading}
              isLoading={deleteTodo.isLoading}
              onClick={handleDeleteTodo}
            >
              Delete
            </LoadingButton>
            <Button
              type="button"
              className="w-32"
              disabled={deleteTodo.isLoading}
              onClick={onCancel}
            >
              Cancel
            </Button>
          </ButtonBar>
        </div>
      </div>
    </div>
  );
};

export default DeleteTodo;
