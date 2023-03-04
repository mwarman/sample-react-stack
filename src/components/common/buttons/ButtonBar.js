/**
 * The `ButtonBar` React component.
 * @module components/common/buttons/ButtonBar
 */

import classNames from 'classnames';

/**
 * The `ButtonBar` component renders one to many buttons in a horizontal bar.
 * @function
 * @param {Object} props The component properties.
 * @param {JSXElement} props.children The contents of the bar.
 * @param {string} [props.className] Optional additional classes applied to the button element.
 * @returns {JSXElement} JSX
 */
const ButtonBar = ({ className, children }) => {
  return <div className={classNames('flex items-center', className)}>{children}</div>;
};

export default ButtonBar;
