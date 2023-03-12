/**
 * The `TodoEdit` React component.
 * @module components/todos/edit/TodoEdit
 */

import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import { useParams } from 'react-router-dom';
import truncate from 'lodash/truncate';

import TodoEditLoading from './TodoEditLoading';
import TodoEditForm from './TodoEditForm';

import { todoSchema } from '../../../validators/todo.validators';
import { useGetTodo, useUpdateTodo } from '../../../hooks/todos.hooks';
import { useToastsContext } from '../../../hooks/toasts.hooks';

/**
 * The `TodoEdit` component renders a Formik instance to edit an existing Todo.
 * This component wraps the `TodoEditForm` with a configured `Formik`
 * component.
 * @function
 * @returns {JSXElement} JSX
 */
const TodoEdit = () => {
  const { todoId } = useParams();
  const toastsContext = useToastsContext();
  const { data: todo, isLoading } = useGetTodo(todoId);
  const updateTodo = useUpdateTodo();

  useEffect(() => {
    if (!isLoading) {
      document.title = `[TODO-${todo.id}] ${truncate(todo.summary)} - Sample React Stack`;
    }
  }, [todo, isLoading]);

  if (isLoading) {
    return <TodoEditLoading />;
  }

  return (
    <div>
      <div className="mb-4 flex items-center">
        <Link to="/todos">Todos</Link>
        <span className="ml-3">/</span>
        <Link to="" className="ml-3 uppercase">
          TODO-{todo.id}
        </Link>
      </div>

      <Formik
        initialValues={{ ...todo }}
        enableReinitialize={true}
        validationSchema={todoSchema}
        onSubmit={(values, { setSubmitting }) => {
          updateTodo.mutate(
            { ...todo, ...values },
            {
              onSuccess: () => {
                setSubmitting(false);
                toastsContext.createToast(`Updated TODO-${todo.id}`);
              },
              onError: (err) => {
                console.error(`Failed to update todo. Detail:`, err);
                // TODO display error notification
              },
            },
          );
        }}
      >
        {(formik) => <TodoEditForm formik={formik} />}
      </Formik>
    </div>
  );
};

export default TodoEdit;
