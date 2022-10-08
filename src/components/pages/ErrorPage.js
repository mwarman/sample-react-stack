import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <div>Sorry, an unexpected error has occurred.</div>
      <div>{error.statusText || error.message}</div>
    </div>
  );
};

export default ErrorPage;
