/**
 * The `HeaderNavLink` React component.
 * @module components/header/HeaderNavLink
 */

import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

/**
 * The `HeaderNavLink` component renders a styled anchor link within the `Header`.
 * Uses React Router `Link`. Enables styling for _active_ vs _inactive_ state.
 * @function
 * @param {Object} props The component properties.
 * @param {string} [props.className] Optional additional classes applied to the link element.
 * @param {boolean} [props.show=true] Indicates if the component should be rendered.
 * @param {*} [props....props] Any additional properties added to the link element.
 * @returns {JSXElement} JSX
 * @example
 * <HeaderNavLink to="/dashboard" title="Dashboard" show={isAuthenticated}>
 *   Dashboard
 * </HeaderNavLink>
 */
const HeaderNavLink = ({ className, show = true, ...props }) => {
  if (!show) return null;

  return (
    <NavLink
      className={({ isActive }) =>
        classNames(
          'mx-4 border-b-2 px-2 font-bold',
          { 'border-transparent hover:opacity-60': !isActive },
          { 'border-slate-700 dark:border-slate-light/70': isActive },
          className,
        )
      }
      {...props}
      data-testid="header-nav-link"
    />
  );
};

export default HeaderNavLink;
