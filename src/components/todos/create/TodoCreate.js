import { Formik } from 'formik';

import TodoForm from '../common/TodoForm';

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
      initialValues={{ summary: '', priority: 'medium', status: 'todo' }}
      validationSchema={todoSchema}
      onSubmit={(values, { setSubmitting }) => {
        createTodo.mutate(
          { ...values, assignee: authState.id },
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
      {(formik) => <TodoForm formik={formik} onCancel={onCancel} />}
    </Formik>
  );
};

export default TodoCreate;
