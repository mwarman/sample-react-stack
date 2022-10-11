import { useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { ArrowPathIcon } from "@heroicons/react/24/outline";

import ButtonBar from "../common/ButtonBar";
import Button from "../common/Button";
import InputField from "../common/InputField";

import { useCreateTodo } from "../../hooks/todos.hooks";

const validationSchema = Yup.object({
  title: Yup.string()
    .max(50, "Must be 50 characters or less")
    .required("Required"),
  userId: Yup.number().required("Required"),
});

const TodoCreate = () => {
  const navigate = useNavigate();
  const createTodo = useCreateTodo();

  return (
    <div className="m-4">
      <div className="text-2xl font-bold">Create Todo</div>
      <Formik
        initialValues={{ title: "", userId: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            createTodo.mutate(
              { ...values, completed: false },
              {
                onSuccess: () => {
                  setSubmitting(false);
                  navigate("/todos/list");
                },
                onError: (err) => {
                  console.error(`Failed to create todo. Detail:`, err);
                  // TODO display error notification
                },
              }
            );
          }, 2000);
        }}
      >
        {(formik) => (
          <Form>
            <div className="mt-4">
              <InputField
                name="title"
                label="Title"
                type="text"
                disabled={formik.isSubmitting}
              />
            </div>

            <div className="mt-4">
              <InputField
                name="userId"
                label="User"
                type="number"
                disabled={formik.isSubmitting}
              />
            </div>

            <ButtonBar className="mt-4">
              <Button
                variant="secondary"
                type="button"
                className="mr-4"
                disabled={formik.isSubmitting}
              >
                Cancel
              </Button>
              <Button
                variant="primary"
                type="submit"
                disabled={formik.isSubmitting}
              >
                {formik.isSubmitting ? (
                  <div className="flex items-center">
                    <ArrowPathIcon className="mr-2 h-5 w-5 animate-spin" />
                    <span>Submitting...</span>
                  </div>
                ) : (
                  <span>Submit</span>
                )}
              </Button>
            </ButtonBar>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default TodoCreate;
