import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import InputField from '../common/forms/InputField';
import Label from '../common/forms/Label';
import ButtonBar from '../common/buttons/ButtonBar';
import LoadingButton from '../common/buttons/LoadingButton';
import Alert from '../common/Alert';

import { useSignIn } from '../../hooks/auth.hooks';
import { useToastsContext } from '../../hooks/toasts.hooks';

const validationSchema = Yup.object({
  username: Yup.string().email('Must be an email address').required('Required'),
  password: Yup.string()
    .min(10, 'Must be at least 10 characters')
    .max(20, 'May be no more than 20 characters')
    .required('Required'),
});

const SignIn = () => {
  useEffect(() => {
    document.title = 'Sign In - Sample React Stack';
  }, []);

  const [error, setError] = useState();
  const navigate = useNavigate();
  const toastsContext = useToastsContext();
  const signIn = useSignIn();

  return (
    <div className="rounded border border-slate-500/30 p-4">
      <h2 className="text-2xl font-bold">Sign In</h2>

      {error && (
        <Alert variant="error" className="mt-4">
          {error}
        </Alert>
      )}

      <Formik
        initialValues={{ username: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          setError(null);
          signIn.mutate(values, {
            onSuccess: (data) => {
              toastsContext.createToast(`Welcome back ${data.firstName}.`);
              setSubmitting(false);
              navigate('/');
            },
            onError: (err) => {
              setError('Authentication failed.');
              setSubmitting(false);
              // TODO display error notification
            },
          });
        }}
      >
        {(formik) => (
          <Form>
            <div className="mt-4">
              <Label htmlFor="usernameField">Username</Label>
              <InputField
                id="usernameField"
                name="username"
                type="text"
                autoComplete="off"
                disabled={formik.isSubmitting}
              />
            </div>

            <div className="mt-4">
              <Label htmlFor="passwordField">Password</Label>
              <InputField
                id="passwordField"
                name="password"
                type="password"
                disabled={formik.isSubmitting}
              />
            </div>

            <ButtonBar className="my-8 justify-end">
              <LoadingButton
                variant="primary"
                type="submit"
                className="w-32"
                disabled={formik.isSubmitting}
                isLoading={formik.isSubmitting}
              >
                Submit
              </LoadingButton>
            </ButtonBar>
          </Form>
        )}
      </Formik>

      <div className="mt-2 border-t border-slate-500/30 pt-2 text-sm">
        <span className="mr-2">Don't have an account?</span>
        <Link to="/auth/signup" className="text-blue-500 hover:underline dark:opacity-80">
          Sign up.
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
