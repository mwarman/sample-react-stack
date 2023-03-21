/**
 * The `Placeholder` React component.
 * @module components/common/Placeholder
 */

import classNames from 'classnames';

/**
 * The`Placeholder` component renders a styled block which may be displayed in
 * the place of content while the content is loading.
 * @function
 * @param {Object} props The component properties.
 * @param {string} [props.className] Optional additional classes applied to the placeholder element.
 * @returns {JSXElement} JSX
 * @example
 * <Placeholder className="ml-3 h-5 w-32" />
 */
const Placeholder = ({ className }) => {
  return (
    <div
      className={classNames('animate-pulse rounded bg-slate-light/70', className)}
      data-testid="placeholder"
    ></div>
  );
};

export default Placeholder;
