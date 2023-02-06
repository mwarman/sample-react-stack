import { Link } from 'react-router-dom';
import classNames from 'classnames';

const DropdownMenuLink = ({ className, ...props }) => {
  return (
    <Link className={classNames('block p-1 text-sm hover:bg-slate-200/70', className)} {...props} />
  );
};

export default DropdownMenuLink;
