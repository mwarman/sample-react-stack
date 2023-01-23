import { ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useSignOut } from '../../hooks/auth.hooks';

const SignOut = () => {
  const navigate = useNavigate();
  const signOut = useSignOut();

  useEffect(() => {
    document.title = 'Sign Out - Sample React Stack';
  }, []);

  useEffect(() => {
    signOut.mutate(null, {
      onSuccess: () => {
        navigate('/');
      },
    });
  }, []);

  return (
    <div className="flex items-center justify-center">
      <ArrowRightOnRectangleIcon className="mr-2 h-6 w-6 animate-pulse text-blue-500" />
      <span className="text-2xl font-bold text-slate-700">Signing Out...</span>
    </div>
  );
};

export default SignOut;
