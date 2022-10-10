import { Formik } from "formik";
import * as Yup from "yup";

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
          }, 1000);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <div className="mt-4">
              <label htmlFor="title" className="text-slate-700">
                Title
              </label>
              <input
                id="title"
                name="title"
                type="text"
                tabIndex="1"
                autoFocus
                placeholder="Enter the task..."
                className="mt-1 block w-full rounded-md border-slate-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.title}
              />
              {touched.title && errors.title ? (
                <div className="mt-0.5 text-xs text-red-600">
                  {errors.title}
                </div>
              ) : null}
            </div>
            <div className="mt-4">
              <label htmlFor="user" className="mr-2 text-slate-700">
                User
              </label>
              <input
                id="userId"
                name="userId"
                type="number"
                tabIndex="2"
                placeholder="Select the assignee..."
                className="mt-1 block w-full rounded-md border-slate-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.userId}
              />
              {touched.userId && errors.userId ? (
                <div className="mt-0.5 text-xs text-red-600">
                  {errors.userId}
                </div>
              ) : null}
            </div>
            <div className="mt-4">
              <button
                type="button"
                tabIndex="1000"
                className="mr-4 rounded-full border border-slate-300 px-3 py-2 text-slate-500 hover:border-slate-500 hover:bg-slate-500 hover:text-white"
              >
                Cancel
              </button>
              <button
                type="submit"
                tabIndex="999"
                disabled={isSubmitting}
                className="rounded-full border border-blue-500 bg-blue-500 px-3 py-2 text-white hover:border-blue-700 hover:bg-blue-700"
              >
                Submit
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default TodoCreate;
