import { Navigate } from 'react-router-dom';

import Loading from '../common/Loading';

import { useAuthState } from '../../hooks/auth.hooks';

const Protected = ({ children }) => {
  const { data: authState, status } = useAuthState();

  if (status === 'loading') {
    return (
      <div className="flex h-1/2 w-screen items-center justify-center">
        <Loading text="Loading..." />
      </div>
    );
  }

  if (authState.isAuthenticated) {
    return children;
  } else {
    return <Navigate to="/auth/signin" replace={true} />;
  }
};

export default Protected;
