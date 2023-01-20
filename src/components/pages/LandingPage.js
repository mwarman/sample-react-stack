import { Link, Navigate } from 'react-router-dom';

import Loading from '../common/Loading';

import { useAuthState } from '../../hooks/auth.hooks';

const LandingPage = () => {
  const { data: authState, isLoading } = useAuthState();

  if (isLoading) {
    return <Loading text="Loading..." className="h-1/2 justify-center" />;
  }

  if (authState.isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div className="flex h-1/2 items-center justify-center">
      <div className="text-2xl">Ready to work?</div>
      <Link
        to="/todos/list"
        className="ml-6 rounded-full bg-blue-500 px-3 py-2 text-xl text-white hover:bg-blue-700"
      >
        Let's go
      </Link>
    </div>
  );
};

export default LandingPage;
