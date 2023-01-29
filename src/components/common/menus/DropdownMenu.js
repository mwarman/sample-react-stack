import { useState } from 'react';

import classNames from 'classnames';

const DropdownMenu = ({ children, position, trigger }) => {
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
        <div onClick={() => setIsHidden(false)}>{trigger}</div>

        {/* dropdown menu content */}
        <div
          className={classNames(
            'absolute top-0 right-8 z-50 min-w-[200px] rounded border border-slate-300 bg-white p-1 shadow-md shadow-slate-500/50',
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
