import { Link, useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import InputField from "../common/InputField";
import ButtonBar from "../common/ButtonBar";
import Button from "../common/Button";
import LoadingButton from "../common/LoadingButton";

import { useSignUp } from "../../hooks/auth.hooks";
import { useToastsContext } from "../../hooks/toasts.hooks";

const validationSchema = Yup.object({
  username: Yup.string().email("Must be an email address").required("Required"),
  password: Yup.string()
    .min(10, "Must be at least 10 characters")
    .max(20, "May be no more than 20 characters")
    .required("Required"),
});

const SignUp = () => {
  const navigate = useNavigate();
  const toastsContext = useToastsContext();
  const signUp = useSignUp();

  return (
    <div className="rounded border p-4">
      <h2 className="text-2xl font-bold">Sign Up</h2>

      <Formik
        initialValues={{ username: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log(`signup::submit::${JSON.stringify(values)}`);
          signUp.mutate(values, {
            onSuccess: () => {
              toastsContext.createToast(`Account created successfully.`);
              setSubmitting(false);
              navigate("/auth/signin");
            },
            onError: (err) => {
              console.error(`Failed to sign up. Detail:`, err);
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
        <span className="mr-2">Already have an account?</span>
        <Link to="/auth/signin" className="text-blue-500 hover:underline">
          Sign in.
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
