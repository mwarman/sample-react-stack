import classNames from 'classnames';

import Icon from './icons/Icon';

const Alert = ({ children, className, variant = 'default' }) => {
  let alertColor = '';
  switch (variant) {
    case 'primary':
      alertColor = 'bg-blue-500/30';
      break;
    case 'warning':
      alertColor = 'bg-amber-300/30';
      break;
    case 'error':
      alertColor = 'bg-red-500/30';
      break;
    default:
      alertColor = 'bg-slate-400/30';
  }

  let iconColor = '';
  switch (variant) {
    case 'primary':
      iconColor = 'text-blue-800 dark:text-blue-300/70';
      break;
    case 'warning':
      iconColor = 'text-amber-800 dark:text-amber-300/70';
      break;
    case 'error':
      iconColor = 'text-red-800 dark:text-red-300/70';
      break;
    default:
      iconColor = '';
  }

  return (
    <div className={classNames('flex items-center rounded p-2', alertColor, iconColor, className)}>
      <Icon name="triangle-exclamation" className="mr-2 inline-block h-6 w-6" />
      <div>{children}</div>
    </div>
  );
};

export default Alert;
