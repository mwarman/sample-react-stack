/**
 * The `SignOut` React component.
 * @module components/auth/SignOut
 */

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Icon from '../common/icons/Icon';

import { useSignOut } from '../../hooks/auth.hooks';

/**
 * The `SignOut`component renders a static message while the system
 * performs user sign out.
 * @function
 * @returns {JSXElement} JSX
 */
const SignOut = () => {
  const navigate = useNavigate();
  const signOut = useSignOut();

  // Set the document title
  useEffect(() => {
    document.title = 'Sign Out - Sample React Stack';
  }, []);

  // Run the `signOut` mutation one time when this component is loaded.
  useEffect(() => {
    signOut.mutate(null, {
      onSuccess: () => {
        navigate('/');
      },
    });
    // eslint-disable-next-line
  }, []);

  return (
    <div className="flex animate-pulse items-center justify-center text-2xl">
      <Icon name="arrow-right-from-bracket" className="mr-2 text-blue dark:opacity-50" />
      <span className="text-2xl font-bold">Signing Out...</span>
    </div>
  );
};

export default SignOut;
