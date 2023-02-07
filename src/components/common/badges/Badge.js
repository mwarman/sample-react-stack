import classNames from 'classnames';

const getVariantClasses = (variant) => {
  switch (variant) {
    case 'danger':
      return 'bg-red-600/70 text-white';
    case 'success':
      return 'bg-green-600/70 text-white';
    case 'warning':
      return 'bg-amber-300/70';
    case 'primary':
      return 'bg-blue-500/70 text-white';
    default:
      return 'bg-slate-300/70';
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
