import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

const HeaderNavLink = ({ className, show = true, ...props }) => {
  if (!show) return null;

  return (
    <NavLink
      className={({ isActive }) =>
        classNames(
          'px-6 font-bold text-slate-500 hover:text-slate-700',
          { 'text-slate-900 hover:text-slate-900': isActive },
          className,
        )
      }
      {...props}
    />
  );
};

export default HeaderNavLink;
