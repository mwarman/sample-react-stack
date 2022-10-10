import { Link, useRouteError } from "react-router-dom";
import { ExclamationTriangleIcon } from "@heroicons/react/24/solid";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      id="error-page"
      className="flex h-screen flex-col items-center justify-center"
    >
      <div>
        <h1 className="text-4xl font-bold text-slate-700">Oh no!</h1>
        <div className="mt-2">
          This is a bit embarrasing. We seem to have had a problem.
        </div>
        <div className="my-2 rounded border border-amber-400 bg-amber-100 p-2">
          <ExclamationTriangleIcon className="mr-2 inline-block h-6 w-6 text-amber-400" />
          {error.statusText || error.message}
        </div>
        <Link to="/" className="mt-2 text-blue-500 hover:text-blue-700">
          Go back
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
