import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

const HeaderNavLink = ({ className, show = true, ...props }) => {
  if (!show) return null;

  return (
    <NavLink
      className={({ isActive }) =>
        classNames(
          'mx-4 border-b-2 px-2 font-bold',
          { 'border-transparent hover:opacity-60': !isActive },
          { 'border-slate-700 dark:border-slate-300/70': isActive },
          className,
        )
      }
      {...props}
    />
  );
};

export default HeaderNavLink;
