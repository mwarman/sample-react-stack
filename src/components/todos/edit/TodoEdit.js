import { Link, useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import { useParams } from 'react-router-dom';
import * as Yup from 'yup';

import Placeholder from '../../common/Placeholder';
import TodoForm from '../common/TodoForm';

import { useGetTodo, useUpdateTodo } from '../../../hooks/todos.hooks';
import { useToastsContext } from '../../../hooks/toasts.hooks';

const validationSchema = Yup.object({
  title: Yup.string().max(50, 'Must be 50 characters or less').required('Required'),
});

const TodoEdit = () => {
  const navigate = useNavigate();
  const { todoId } = useParams();
  const toastsContext = useToastsContext();
  const { data: todo, isLoading } = useGetTodo(todoId);
  const updateTodo = useUpdateTodo();

  if (isLoading) {
    return (
      <div className="m-4">
        <div className="mb-2 flex items-center text-slate-700">
          <Link to="/todos">Todos</Link>
          <span className="ml-3">/</span>
          <Placeholder size="lg" className="ml-3 w-1/12" />
        </div>

        <Placeholder size="xl" className="mb-8 w-1/3" />

        <Placeholder className="mb-3 w-1/12" />
        <Placeholder className="mb-4 h-20 w-1/2" />
      </div>
    );
  }

  return (
    <div className="m-4">
      <div className="mb-2 flex items-center text-slate-700">
        <Link to="/todos">Todos</Link>
        <span className="ml-3">/</span>
        <Link to="" className="ml-3 uppercase">
          TODO-{todo.id}
        </Link>
      </div>

      <Formik
        initialValues={{ title: todo.title }}
        enableReinitialize={true}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          updateTodo.mutate(
            { ...todo, ...values },
            {
              onSuccess: () => {
                setSubmitting(false);
                toastsContext.createToast(`Updated TODO-${todo.id} successfully.`);
                navigate(`/todos/${todo.id}`);
              },
              onError: (err) => {
                console.error(`Failed to update todo. Detail:`, err);
                // TODO display error notification
              },
            },
          );
        }}
      >
        {(formik) => <TodoForm formik={formik} />}
      </Formik>
    </div>
  );
};

export default TodoEdit;
