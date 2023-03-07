/**
 * The `DropdownMenuTitle` React component.
 * @module components/common/menus/DropdownMenuTitle
 */

import classNames from 'classnames';

/**
 * The `DropdownMenuTitle` component renders a title or section heading
 * within a `DropdownMenu`.
 * @function
 * @param {Object} props The component properties.
 * @param {JSXElement} props.children The inner content. The title.
 * @param {string} [props.className] Optional additional classes applied to the element.
 * @returns {JSXElement} JSX
 */
const DropdownMenuTitle = ({ children, className }) => {
  return <div className={classNames('p-1 text-sm font-bold', className)}>{children}</div>;
};

export default DropdownMenuTitle;
