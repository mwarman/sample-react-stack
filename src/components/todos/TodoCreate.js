import { Formik, Form } from "formik";
import * as Yup from "yup";
import { ArrowPathIcon } from "@heroicons/react/24/outline";

import InputField from "../common/InputField";

const validationSchema = Yup.object({
  title: Yup.string()
    .max(50, "Must be 50 characters or less")
    .required("Required"),
  userId: Yup.number().required("Required"),
});

const TodoCreate = () => {
  return (
    <div className="m-4">
      <div className="text-2xl font-bold">Create Todo</div>
      <Formik
        initialValues={{ title: "", userId: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log(`submitted`);
          setTimeout(() => {
            console.log(JSON.stringify(values));
            setSubmitting(false);
          }, 20000);
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

            <div className="mt-4 flex items-center">
              <button
                type="button"
                className="mr-4 rounded-full border border-slate-300 px-3 py-2 text-slate-500 hover:border-slate-500 hover:bg-slate-500 hover:text-white"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={formik.isSubmitting}
                className="rounded-full border border-blue-500 bg-blue-500 px-3 py-2 text-white hover:border-blue-700 hover:bg-blue-700 disabled:border-blue-400 disabled:bg-blue-400 disabled:text-slate-200"
              >
                {formik.isSubmitting ? (
                  <div className="flex items-center">
                    <ArrowPathIcon className="mr-2 h-5 w-5 animate-spin" />
                    <span>Submitting...</span>
                  </div>
                ) : (
                  <span>Submit</span>
                )}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default TodoCreate;
