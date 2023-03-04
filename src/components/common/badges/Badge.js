/**
 * The `Badge` React component.
 * @module components/common/badge/Badge
 */

import classNames from 'classnames';

/**
 * Get the CSS classes for the supplied variant.
 * @function
 * @param {string} variant The style variant.
 * @returns {string} CSS class names.
 */
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

/**
 * The `Badge` component renders a small colored wrapper around a bit of text.
 * @function
 * @param {Object} props The component properties.
 * @param {JSXElement} props.children The Badge inner content.
 * @param {string} [props.className] Optional additional classes applied to the Badge.
 * @param {string} [props.variant] The style variant.
 * @returns {JSXElement} JSX
 * @example
 * // <Badge variant='success'>Done</Badge>
 */
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
