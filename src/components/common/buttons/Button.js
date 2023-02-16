import classNames from 'classnames';

const Button = ({ className, children, size = 'md', variant = 'default', ...props }) => {
  let colorClasses = '';
  switch (variant) {
    case 'primary':
      colorClasses =
        'bg-blue-500 text-white enabled:hover:bg-blue-700 disabled:opacity-50 dark:bg-blue-500/50 dark:enabled:hover:bg-blue-700/50 dark:text-slate-300';
      break;
    default:
      colorClasses = 'enabled:hover:bg-slate-500/20 disabled:opacity-50';
  }

  let sizeClasses = '';
  switch (size) {
    case 'lg':
      sizeClasses = 'px-4 py-3 text-lg';
      break;
    case 'sm':
      sizeClasses = 'px-2 py-1 text-sm';
      break;
    default:
      sizeClasses = 'px-3 py-2';
  }

  return (
    <button
      className={classNames('rounded border-0', sizeClasses, colorClasses, className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
