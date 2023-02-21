import classNames from 'classnames';

import Icon from './icons/Icon';

const Alert = ({ children, className, variant = 'default' }) => {
  let alertColor = '';
  switch (variant) {
    case 'primary':
      alertColor = 'bg-blue/30';
      break;
    case 'warning':
      alertColor = 'bg-amber-light/30';
      break;
    case 'error':
      alertColor = 'bg-red/30';
      break;
    default:
      alertColor = 'bg-slate/30';
  }

  let iconColor = '';
  switch (variant) {
    case 'primary':
      iconColor = 'text-blue-dark dark:text-blue-light/70';
      break;
    case 'warning':
      iconColor = 'text-amber-dark dark:text-amber-light/70';
      break;
    case 'error':
      iconColor = 'text-red-dark dark:text-red-light/70';
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
