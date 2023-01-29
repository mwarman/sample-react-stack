import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Icon from '../common/icons/Icon';

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
    <div className="flex items-center justify-center text-2xl">
      <Icon name="arrow-right-from-bracket" className="mr-2 text-blue-500" />
      <span className="text-2xl font-bold text-slate-700">Signing Out...</span>
    </div>
  );
};

export default SignOut;
