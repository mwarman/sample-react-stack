import { Formik } from "formik";
import * as Yup from "yup";

import TodoForm from "./TodoForm";

import { useCreateTodo } from "../../hooks/todos.hooks";
import { useToastsContext } from "../../hooks/toasts.hooks";

const validationSchema = Yup.object({
  title: Yup.string()
    .max(50, "Must be 50 characters or less")
    .required("Required"),
  userId: Yup.number().required("Required"),
});

const TodoCreate = ({ onCancel, onSuccess }) => {
  const toastsContext = useToastsContext();
  const createTodo = useCreateTodo();

  return (
    <div className="m-4">
      <div className="text-2xl font-bold">Create Todo</div>
      <Formik
        initialValues={{ title: "", userId: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          createTodo.mutate(
            { ...values, completed: false },
            {
              onSuccess: (todo) => {
                setSubmitting(false);
                toastsContext.createToast(
                  `Created TODO-${todo.id} successfully.`
                );
                onSuccess && onSuccess();
              },
              onError: (err) => {
                console.error(`Failed to create todo. Detail:`, err);
                // TODO display error notification
              },
            }
          );
        }}
      >
        {(formik) => <TodoForm formik={formik} onCancel={onCancel} />}
      </Formik>
    </div>
  );
};

export default TodoCreate;
