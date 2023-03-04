/**
 * The `Button` React component.
 * @module components/common/buttons/Button
 */

import classNames from 'classnames';

/**
 * The `Button` component renders a styled button element.
 * @function
 * @param {Object} props The component properties.
 * @param {JSXElement} props.children The inner content.
 * @param {string} [props.className] Optional additional classes applied to the button element.
 * @param {string} [props.size='md'] The size.
 * @param {string} [props.variant='default'] The style variant.
 * @param {*} [props....props] Any additional properties added to the button element.
 * @returns {JSXElement} JSX
 */
const Button = ({ className, children, size = 'md', variant = 'default', ...props }) => {
  let colorClasses = '';
  switch (variant) {
    case 'primary':
      colorClasses =
        'bg-blue text-white enabled:hover:bg-blue-dark disabled:opacity-50 dark:bg-blue/50 dark:enabled:hover:bg-blue-dark/50 dark:text-slate-light';
      break;
    default:
      colorClasses = 'enabled:hover:bg-slate/20 disabled:opacity-50';
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
