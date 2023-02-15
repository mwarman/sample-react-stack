import classNames from 'classnames';

const getVariantClasses = (variant) => {
  switch (variant) {
    case 'danger':
      return 'bg-red-500/30 text-red-800 dark:text-red-300/70';
    case 'success':
      return 'bg-green-500/30 text-green-800 dark:text-green-300/70';
    case 'warning':
      return 'bg-amber-300/30 text-amber-800 dark:text-amber-300/70';
    case 'primary':
      return 'bg-blue-500/30 text-blue-800 dark:text-blue-300/70';
    default:
      return 'bg-slate-400/30';
  }
};

export const Badge = ({ children, className, variant }) => {
  return (
    <span
      className={classNames(
        'rounded px-2 py-1 text-xs font-bold',
        getVariantClasses(variant),
        className,
      )}
    >
      {children}
    </span>
  );
};

export default Badge;
