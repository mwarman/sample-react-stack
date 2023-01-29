import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import InputField from '../common/forms/InputField';
import Label from '../common/forms/Label';
import ButtonBar from '../common/buttons/ButtonBar';
import LoadingButton from '../common/buttons/LoadingButton';
import Alert from '../common/Alert';

import { useSignUp } from '../../hooks/auth.hooks';
import { useToastsContext } from '../../hooks/toasts.hooks';

const validationSchema = Yup.object({
  firstName: Yup.string().max(30, 'May be no more than 30 characters').required('Required'),
  lastName: Yup.string().max(30, 'May be no more than 30 characters').required('Required'),
  username: Yup.string().email('Must be an email address').required('Required'),
  password: Yup.string()
    .min(10, 'Must be at least 10 characters')
    .max(20, 'May be no more than 20 characters')
    .required('Required'),
});

const SignUp = () => {
  useEffect(() => {
    document.title = 'Sign Up - Sample React Stack';
  }, []);

  const [error, setError] = useState();
  const navigate = useNavigate();
  const toastsContext = useToastsContext();
  const signUp = useSignUp();

  return (
    <div className="rounded border p-4">
      <h2 className="text-2xl font-bold">Sign Up</h2>

      {error && (
        <Alert variant="error" className="mt-4">
          {error}
        </Alert>
      )}

      <Formik
        initialValues={{ firstName: '', lastName: '', username: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          setError(null);
          signUp.mutate(values, {
            onSuccess: () => {
              toastsContext.createToast(`Account created successfully.`);
              setSubmitting(false);
              navigate('/auth/signin');
            },
            onError: (err) => {
              setError(`Registration failed. ${err.message}`);
              setSubmitting(false);
              // TODO display error notification
            },
          });
        }}
      >
        {(formik) => (
          <Form>
            <div className="mt-4">
              <Label htmlFor="firstNameField">First Name</Label>
              <InputField
                id="firstNameField"
                name="firstName"
                type="text"
                autoComplete="off"
                disabled={formik.isSubmitting}
              />
            </div>

            <div className="mt-4">
              <Label htmlFor="lastNameField">Last Name</Label>
              <InputField
                id="lastNameField"
                name="lastName"
                type="text"
                autoComplete="off"
                disabled={formik.isSubmitting}
              />
            </div>

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
