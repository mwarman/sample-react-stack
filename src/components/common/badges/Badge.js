import classNames from 'classnames';

const getVariantClasses = (variant) => {
  switch (variant) {
    case 'danger':
      return 'bg-red-500/30 text-red-800';
    case 'success':
      return 'bg-green-500/30 text-green-800';
    case 'warning':
      return 'bg-amber-300/30 text-amber-800';
    case 'primary':
      return 'bg-blue-500/30 text-blue-800';
    default:
      return 'bg-slate-400/30 text-slate-700';
  }
};

export const Badge = ({ variant, children }) => {
  return (
    <span className={classNames('rounded px-2 py-1 text-xs font-bold', getVariantClasses(variant))}>
      {children}
    </span>
  );
};

export default Badge;
