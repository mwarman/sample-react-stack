/**
 * The `Protected` React component.
 * @module components/routers/Protected
 */

import { Navigate } from 'react-router-dom';

import Loading from '../common/Loading';

import { useAuthState } from '../../hooks/auth.hooks';

/**
 * The `Protected` component renders the supplied `children` when the current
 * user is authenticated; otherwise, redirects the user to the SignIn page.
 * @function
 * @param {Object} props The component properties.
 * @param {JSXElement} props.children The content rendered when authenticted.
 * @returns {JSXElement} JSX
 */
const Protected = ({ children }) => {
  const { data: authState, status } = useAuthState();

  if (status === 'loading') {
    return <Loading className="my-8 animate-pulse justify-center text-6xl text-slate/70" />;
  }

  if (authState.isAuthenticated) {
    return children;
  } else {
    return <Navigate to="/auth/signin" replace={true} />;
  }
};

export default Protected;
