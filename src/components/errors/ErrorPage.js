/**
 * The `ErrorPage` React component.
 * @module components/errors/ErrorPage
 */

import { useNavigate, useRouteError } from 'react-router-dom';

import Alert from '../common/Alert';
import Button from '../common/buttons/Button';

/**
 * The `ErrorPage` component renders the standard application error page.
 * Serves as the application default Error Boundary.
 * @function
 * @returns {JSXElement} JSX
 */
const ErrorPage = () => {
  const navigate = useNavigate();
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="flex h-screen flex-col items-center justify-center">
      <div className="max-w-2xl">
        <h1 className="mb-2 text-4xl font-bold">Oh no!</h1>
        <div className="mb-8">This is a bit embarrasing. We seem to have had a problem.</div>
        <Alert variant="warning" className="mb-8">
          {error.statusText || error.message}
        </Alert>
        <Button variant="primary" className="w-32" title="Go back" onClick={() => navigate('/')}>
          Go Back
        </Button>
      </div>
    </div>
  );
};

export default ErrorPage;
