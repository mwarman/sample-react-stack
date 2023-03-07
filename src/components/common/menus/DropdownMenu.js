/**
 * The `DropdownMenu` React component.
 * @module components/common/menus/DropdownMenu
 */

import { useState } from 'react';

import classNames from 'classnames';

/**
 * The `DropdownMenu` component renders a small floating menu. Useful for
 * providing navigation and actions for list items or toolbars.
 * @function
 * @param {Object} props The component properties.
 * @param {JSXElement} props.children The inner menu content.
 * @param {string} [props.position='top-0 right-8'] Optional position classes
 * to adjust the menu location relative to the trigger element.
 * @param {JSXElement} props.trigger The element which triggers opening the menu.
 * @returns {JSXElement} JSX
 * @example
 * <DropdownMenu trigger={<Avatar className="cursor-pointer" />} position="-right-0 top-11">
 *   <DropdownMenuTitle>Account</DropdownMenuTitle>
 *   <DropdownMenuLink to="/auth/signout" title="Sign Out">
 *     Sign Out
 *   </DropdownMenuLink>
 * </DropdownMenu>
 */
const DropdownMenu = ({ children, position = 'top-0 right-8', trigger }) => {
  const [isHidden, setIsHidden] = useState(true);

  return (
    <>
      {/* dropdown menu backdrop */}
      <div
        className={classNames('absolute top-0 left-0 z-40 h-screen w-screen', { hidden: isHidden })}
        onClick={() => setIsHidden(true)}
      ></div>
      {/* dropdown menu */}
      <div className="relative">
        {/* dropdown menu trigger */}
        <div className="cursor-pointer" onClick={() => setIsHidden(false)}>
          {trigger}
        </div>

        {/* dropdown menu content */}
        <div
          className={classNames(
            'absolute z-50 min-w-[200px] rounded border border-slate/30 bg-white p-1 shadow-md shadow-slate/50 dark:bg-slate-900',
            {
              hidden: isHidden,
            },
            position,
          )}
          onClick={() => setIsHidden(true)}
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default DropdownMenu;
