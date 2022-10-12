import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import { useParams } from "react-router-dom";
import * as Yup from "yup";

import Placeholder from "../common/Placeholder";
import TodoForm from "./TodoForm";

import { useGetTodo, useUpdateTodo } from "../../hooks/todos.hooks";

const validationSchema = Yup.object({
  title: Yup.string()
    .max(50, "Must be 50 characters or less")
    .required("Required"),
  userId: Yup.number().required("Required"),
});

const TodoEdit = () => {
  const navigate = useNavigate();
  const { todoId } = useParams();
  const { data: todo, status } = useGetTodo(todoId);
  const updateTodo = useUpdateTodo();

  if (status === "loading") {
    return (
      <div className="m-4">
        <div className="mb-4 text-2xl font-bold">Edit Todo</div>
        <Placeholder className="mb-3 w-1/5" />
        <Placeholder size="lg" className="mb-8" />
        <Placeholder className="mb-3 w-1/5" />
        <Placeholder size="lg" className="mb-8" />
      </div>
    );
  }

  return (
    <div className="m-4">
      <div className="text-2xl font-bold">Edit Todo</div>
      <Formik
        initialValues={{ title: todo.title, userId: todo.userId }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          updateTodo.mutate(
            { ...todo, ...values },
            {
              onSuccess: () => {
                setSubmitting(false);
                navigate(`/todos/${todo.id}`);
              },
              onError: (err) => {
                console.error(`Failed to update todo. Detail:`, err);
                // TODO display error notification
              },
            }
          );
        }}
      >
        {(formik) => <TodoForm formik={formik} />}
      </Formik>
    </div>
  );
};

export default TodoEdit;
