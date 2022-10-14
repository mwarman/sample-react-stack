import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import InputField from "../common/InputField";
import ButtonBar from "../common/ButtonBar";
import Button from "../common/Button";
import LoadingButton from "../common/LoadingButton";
import Alert from "../common/Alert";

import { useSignIn } from "../../hooks/auth.hooks";
import { useToastsContext } from "../../hooks/toasts.hooks";

const validationSchema = Yup.object({
  username: Yup.string().email("Must be an email address").required("Required"),
  password: Yup.string()
    .min(10, "Must be at least 10 characters")
    .max(20, "May be no more than 20 characters")
    .required("Required"),
});

const SignIn = () => {
  const [error, setError] = useState();
  const navigate = useNavigate();
  const toastsContext = useToastsContext();
  const signIn = useSignIn();

  return (
    <div className="rounded border p-4">
      <h2 className="text-2xl font-bold">Sign In</h2>

      {error && (
        <Alert variant="error" className="mt-4">
          {error}
        </Alert>
      )}

      <Formik
        initialValues={{ username: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log(`signin::submit::${JSON.stringify(values)}`);
          setError(null);
          signIn.mutate(values, {
            onSuccess: (data) => {
              toastsContext.createToast(`Welcome back ${data.username}`);
              setSubmitting(false);
              navigate("/todos/list");
            },
            onError: (err) => {
              setError("Authentication failed.");
              setSubmitting(false);
              // TODO display error notification
            },
          });
        }}
      >
        {(formik) => (
          <Form>
            <div className="mt-4">
              <InputField
                name="username"
                label="Username"
                type="text"
                disabled={formik.isSubmitting}
              />
            </div>

            <div className="mt-4">
              <InputField
                name="password"
                label="Password"
                type="password"
                disabled={formik.isSubmitting}
              />
            </div>

            <ButtonBar className="my-4">
              <Button
                variant="secondary"
                type="button"
                className="mr-4"
                disabled={formik.isSubmitting}
                onClick={() => navigate("/")}
              >
                Cancel
              </Button>
              <LoadingButton
                variant="primary"
                type="submit"
                disabled={formik.isSubmitting}
                isLoading={formik.isSubmitting}
              >
                Submit
              </LoadingButton>
            </ButtonBar>
          </Form>
        )}
      </Formik>

      <div className="mt-2 border-t border-slate-300 pt-2 text-sm">
        <span className="mr-2">Don't have an account?</span>
        <Link to="/auth/signup" className="text-blue-500 hover:underline">
          Sign up.
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
