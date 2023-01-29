import classNames from 'classnames';

const DropdownMenuTitle = ({ children, className }) => {
  return (
    <div className={classNames('p-1 text-sm font-bold text-slate-700', className)}>{children}</div>
  );
};

export default DropdownMenuTitle;
