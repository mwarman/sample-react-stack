/**
 * The `DropdownMenuLink` React component.
 * @module components/common/menus/DropdownMenuLink
 */

import { Link } from 'react-router-dom';
import classNames from 'classnames';

/**
 * The `DropdownMenuLink` component renders a styled link within a `DropdownMenu`.
 * all properties are passed to the `Link`. See the full example in `DropdownMenu`.
 * @function
 * @param {Object} props The component properties.
 * @param {string} [props.className] Optional additional classes applied to the link element.
 * @param {*} [props....props] Any additional properties added to the link element.
 * @returns (JSXElement) JSX
 */
const DropdownMenuLink = ({ className, ...props }) => {
  return (
    <Link className={classNames('block p-1 text-sm hover:bg-slate/20', className)} {...props} />
  );
};

export default DropdownMenuLink;
