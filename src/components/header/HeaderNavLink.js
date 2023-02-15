import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

const HeaderNavLink = ({ className, show = true, ...props }) => {
  if (!show) return null;

  return (
    <NavLink
      className={({ isActive }) =>
        classNames(
          'mx-4 border-b-2 px-2 font-bold hover:opacity-60',
          { 'border-transparent': !isActive },
          { 'border-slate-300 opacity-60 dark:border-slate-700': isActive },
          className,
        )
      }
      {...props}
    />
  );
};

export default HeaderNavLink;
