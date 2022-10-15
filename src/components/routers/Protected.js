import { Navigate } from 'react-router-dom';

import { useAuthState } from '../../hooks/auth.hooks';

const Protected = ({ children }) => {
  const { data: authState, status } = useAuthState();
  console.log(`Protected::${status}::${JSON.stringify(authState)}`);

  if (status === 'loading') {
    return null;
  }

  if (authState.isAuthenticated) {
    return children;
  } else {
    return <Navigate to="/auth/signin" replace={true} />;
  }
};

export default Protected;
