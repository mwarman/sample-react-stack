import classNames from 'classnames';

const getBadgeColor = (variant) => {
  switch (variant) {
    case 'danger':
      return 'bg-red-600 text-white';
    case 'success':
      return 'bg-green-600 text-white';
    case 'warning':
      return 'bg-amber-300';
    case 'primary':
      return 'bg-blue-500';
    default:
      return 'bg-slate-300';
  }
};

export const Badge = ({ variant, children }) => {
  return (
    <span className={classNames('rounded px-2 py-1 text-xs font-bold', getBadgeColor(variant))}>
      {children}
    </span>
  );
};

export default Badge;
