import { Navigate } from 'react-router-dom';

import Loading from '../common/Loading';

import { useAuthState } from '../../hooks/auth.hooks';

const Protected = ({ children }) => {
  const { data: authState, status } = useAuthState();

  if (status === 'loading') {
    return <Loading className="my-8 animate-pulse justify-center text-6xl text-slate-200" />;
  }

  if (authState.isAuthenticated) {
    return children;
  } else {
    return <Navigate to="/auth/signin" replace={true} />;
  }
};

export default Protected;
