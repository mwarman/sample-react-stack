import { Formik } from 'formik';

import TodoCreateForm from './TodoCreateForm';

import { todoSchema } from '../../../validators/todo.validators';
import { useCreateTodo } from '../../../hooks/todos.hooks';
import { useToastsContext } from '../../../hooks/toasts.hooks';
import { useAuthState } from '../../../hooks/auth.hooks';

const TodoCreate = ({ onCancel, onSuccess }) => {
  const toastsContext = useToastsContext();
  const { data: authState } = useAuthState();
  const createTodo = useCreateTodo();

  return (
    <Formik
      initialValues={{
        summary: '',
        description: '',
        priorityCode: 'medium',
        statusCode: 'todo',
        dueAt: '',
      }}
      validationSchema={todoSchema}
      onSubmit={(values, { setSubmitting }) => {
        createTodo.mutate(
          { ...values, assigneeId: authState.id },
          {
            onSuccess: (todo) => {
              setSubmitting(false);
              toastsContext.createToast(`Created TODO-${todo.id}`);
              onSuccess && onSuccess();
            },
            onError: (err) => {
              console.error(`Failed to create todo. Detail:`, err);
              // TODO display error notification
            },
          },
        );
      }}
    >
      {(formik) => <TodoCreateForm formik={formik} onCancel={onCancel} />}
    </Formik>
  );
};

export default TodoCreate;
