import classNames from 'classnames';

const getVariantClasses = (variant) => {
  switch (variant) {
    case 'danger':
      return 'bg-red/30 text-red-dark dark:text-red-light/70';
    case 'success':
      return 'bg-green/30 text-green-dark dark:text-green-light/70';
    case 'warning':
      return 'bg-amber-light/30 text-amber-dark dark:text-amber-light/70';
    case 'primary':
      return 'bg-blue/30 text-blue-dark dark:text-blue-light/70';
    default:
      return 'bg-slate/30';
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
