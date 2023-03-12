/**
 * The `TodoCreate` React component.
 * @module components/todos/create/TodoCreate
 */

import { Formik } from 'formik';
import { Link } from 'react-router-dom';

import TodoCreateForm from './TodoCreateForm';

import { todoSchema } from '../../../validators/todo.validators';
import { useCreateTodo } from '../../../hooks/todos.hooks';
import { useToastsContext } from '../../../hooks/toasts.hooks';
import { useAuthState } from '../../../hooks/auth.hooks';

/**
 * The `TodoCreate` component renders a Formik instance to create a new `Todo`.
 * This component wraps the `TodoCreateForm` with a configured `Formik` component.
 * @function
 * @param {Object} props The component properties.
 * @param {function} props.onCancel A function invoked when user cancels form submission.
 * @param {function} props.onSubmit A function invoked when user submits the form.
 * @returns {JSXElement} JSX
 */
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
              toastsContext.createToast(
                <span>
                  Created <Link to={`/todos/${todo.id}`}>TODO-{todo.id}</Link>
                </span>,
              );
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
