import classNames from 'classnames';

const Button = ({ className, children, size = 'md', variant = 'default', ...props }) => {
  let colorClasses = '';
  switch (variant) {
    case 'primary':
      colorClasses =
        'border-blue-500 bg-blue-500 text-white hover:border-blue-700 hover:bg-blue-700 disabled:border-blue-400 disabled:bg-blue-400 disabled:text-slate-200';
      break;
    case 'secondary':
      colorClasses =
        'border-slate-400 text-slate-500 hover:border-slate-500 hover:bg-slate-500 hover:text-white disabled:border-slate-200 disabled:bg-slate-200 disabled:hover:text-slate-500';
      break;
    default:
      colorClasses = 'border-white bg-white hover:border-slate-200 hover:bg-slate-200';
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
      className={classNames('rounded border', sizeClasses, colorClasses, className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
