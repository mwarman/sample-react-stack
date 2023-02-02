import { Link, useRouteError } from 'react-router-dom';

import Icon from '../common/icons/Icon';

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="flex h-screen flex-col items-center justify-center">
      <div className="max-w-2xl text-slate-700">
        <h1 className="mb-2 text-4xl font-bold">Oh no!</h1>
        <div className="mb-4">This is a bit embarrasing. We seem to have had a problem.</div>
        <div className="mb-4 flex rounded border border-amber-400 bg-amber-100 p-4">
          <Icon name="triangle-exclamation" className="mr-4 text-2xl text-amber-400" />
          {error.statusText || error.message}
        </div>
        <Link to="/" className="text-blue-500 hover:text-blue-700" title="Go back">
          Go back
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
