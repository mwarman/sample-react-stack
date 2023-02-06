import { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

import Loading from '../../common/Loading';
import Button from '../../common/buttons/Button';

import { useAuthState } from '../../../hooks/auth.hooks';

const LandingPage = () => {
  useEffect(() => {
    document.title = 'Sample React Stack';
  }, []);

  const navigate = useNavigate();

  const { data: authState, isLoading } = useAuthState();

  if (isLoading) {
    return <Loading className="h-1/2 justify-center">Loading...</Loading>;
  }

  if (authState.isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div className="flex h-1/2 items-center justify-center">
      <div className="text-2xl">Got stuff to do?</div>
      <Button
        type="button"
        variant="primary"
        title="Get Started"
        className="ml-8 w-36 text-xl"
        onClick={() => navigate('/dashboard')}
      >
        Get Started
      </Button>
    </div>
  );
};

export default LandingPage;
