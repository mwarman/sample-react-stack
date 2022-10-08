import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="mx-2 mt-2">
      <h1 className="text-3xl font-bold">Welcome to the Todos App</h1>
      <div className="mt-4 text-xl">Ready to work?</div>
      <div className="mt-6">
        <Link
          to="/todos/list"
          className="m-2 rounded-2xl bg-blue-500 p-3 text-white hover:bg-blue-700"
        >
          Let's go
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
